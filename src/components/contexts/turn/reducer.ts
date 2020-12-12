import { update } from 'ramda'
import type { Reducer } from 'react'
import { ok, pending } from '~/models/result'
import Turn, { DEFAULT_VALUE } from '~/models/turn'
import * as actions from './actions'

export type State = Turn
export type Action = ReturnType<typeof actions[keyof typeof actions]>

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'move':
      return update(
        action.payload.rollIndex,
        ok([action.payload.boardIndex, action.payload.attributes]),
        state,
      ) as Turn
    case 'reset':
      return DEFAULT_VALUE
    case 'undo':
      return update(action.payload, pending, state) as Turn
    default:
      return state
  }
}

export default reducer
