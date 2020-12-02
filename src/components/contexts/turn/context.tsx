import { compose, complement, equals, findIndex } from 'ramda'
import { Dispatch, FC, createContext, useCallback, useReducer } from 'react'
import { isOK, forceUnwrap } from '~/models/result'
import Turn, { CompleteTurn, DEFAULT_VALUE } from '~/models/turn'
import useBoard, { applyTurn } from '../../hooks/useBoard'
import useRoutes from '../../hooks/useRoutes'
import { reset } from './actions'
import reducer, { State, Action } from './reducer'

const CONTEXT = createContext<[State, Dispatch<Action>]>([DEFAULT_VALUE, () => null])
const anyNotOk = compose(equals(-1), findIndex(complement(isOK)))
function assertAllOk(maybe: Turn): asserts maybe is CompleteTurn {
  if (anyNotOk(maybe)) {
    throw new Error(`Tried to apply incomplete turn: ${JSON.stringify(maybe, null, 2)}`)
  }
}

export const TurnProvider: FC = ({ children }) => {
  const [, setBoard] = useBoard()
  const [state, forwardAction] = useReducer(reducer, DEFAULT_VALUE)
  const [routes] = useRoutes()

  const dispatch: Dispatch<Action> = useCallback(
    action => {
      forwardAction(action)
      if (action.type === 'apply') {
        assertAllOk(state)
        setBoard(
          applyTurn(
            state.map(({ value: boardIdx }, routeIdx) => [
              boardIdx,
              forceUnwrap(routeIdx[routeIdx]), // TODO: get rid of forceUnwrap?
            ]),
          ),
        )
        dispatch(reset())
      }
    },
    [forwardAction, reset, routes, setBoard, state],
  )

  return <CONTEXT.Provider value={[state, dispatch]}>{children}</CONTEXT.Provider>
}

export default CONTEXT
