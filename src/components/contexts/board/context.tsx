import { Dispatch, FC, createContext, useContext, useReducer } from 'react'
import { DEfAULT_VALUE } from '~/models/board'
import reducer, { State, Action } from './reducer'

const CONTEXT = createContext<[State, Dispatch<Action>]>([DEfAULT_VALUE, () => null])

export const BoardProvider: FC = ({ children }) => (
  <CONTEXT.Provider value={useReducer(reducer, DEfAULT_VALUE)}>
    {children}
  </CONTEXT.Provider>
)

export const useBoard = (ctx: typeof CONTEXT = CONTEXT) => useContext(ctx)

export default CONTEXT
