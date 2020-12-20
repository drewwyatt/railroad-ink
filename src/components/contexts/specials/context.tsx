import { Dispatch, FC, createContext, useContext, useReducer, useCallback } from 'react'
import useBoard, { applyTurn } from '~/components/hooks/useBoard'
import reducer, { Action, DEFAULT_STATE, State } from './reducer'

const CONTEXT = createContext<[State, Dispatch<Action>]>([DEFAULT_STATE, () => null])

export const SpecialsProvider: FC = ({ children }) => {
  const [, setBoard] = useBoard()
  const [state, forwardAction] = useReducer(reducer, DEFAULT_STATE)
  const dispatch: Dispatch<Action> = useCallback(
    action => {
      forwardAction(action)
      if (action.type === 'apply') {
        if (state.selection) {
          setBoard(
            applyTurn([
              [state.selection.move[0], [state.selection.face, state.selection.move[1]]],
            ]),
          )
        }
      }
    },
    [forwardAction, setBoard, state],
  )

  return <CONTEXT.Provider value={[state, dispatch]}>{children}</CONTEXT.Provider>
}

export const useSpecials = () => useContext(CONTEXT)

export default CONTEXT
