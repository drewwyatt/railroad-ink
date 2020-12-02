import type { Reducer } from 'react'
import Board, { DEfAULT_VALUE } from '~/models/board'
import * as actions from './actions'

export type State = Board
export type Action = ReturnType<typeof actions[keyof typeof actions]>

const reducer: Reducer<State, Action> = (state = DEfAULT_VALUE, action) => {
  switch (action.type) {
    case 'applyTurn':
      return action.payload.reduce(
        (board, [idx, face]) => {
          board[idx] = face
          return board
        },
        [...state],
      )
    case 'reset':
      return DEfAULT_VALUE
    default:
      return state
  }
}

export default reducer
