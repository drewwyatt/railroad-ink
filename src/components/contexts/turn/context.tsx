import { Dispatch, FC, createContext, useCallback, useReducer } from 'react'
import { isOK, forceUnwrap } from '~/models/result'
import route from '~/models/routes'
import Turn, { CompleteTurn, DEFAULT_VALUE } from '~/models/turn'
import useBoard, { applyTurn } from '../../hooks/useBoard'
import useRoll, { DEFAULT_ROLL } from '../../hooks/useRoll'
import { reset } from './actions'
import reducer, { State, Action } from './reducer'

const CONTEXT = createContext<[State, Dispatch<Action>]>([DEFAULT_VALUE, () => null])
function assertAllOk(maybe: Turn): asserts maybe is CompleteTurn {
  if (!maybe.every(isOK)) {
    throw new Error(`Tried to apply incomplete turn: ${JSON.stringify(maybe, null, 2)}`)
  }
}

export const TurnProvider: FC = ({ children }) => {
  const [, setBoard] = useBoard()
  const [state, forwardAction] = useReducer(reducer, DEFAULT_VALUE)
  const [roll, setRoll] = useRoll()

  const dispatch: Dispatch<Action> = useCallback(
    action => {
      forwardAction(action)
      if (action.type === 'apply') {
        assertAllOk(state)
        setBoard(
          applyTurn(
            state.map(({ value: [boardIdx, attributes] }, rollIdx) => [
              boardIdx,
              route(forceUnwrap(roll[rollIdx]), attributes),
            ]),
          ),
        )
        dispatch(reset())
        setRoll(DEFAULT_ROLL)
      }
    },
    [forwardAction, reset, roll, setBoard, state, setRoll],
  )

  return <CONTEXT.Provider value={[state, dispatch]}>{children}</CONTEXT.Provider>
}

export default CONTEXT
