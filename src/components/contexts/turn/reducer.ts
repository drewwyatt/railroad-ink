import { update } from 'ramda'
import type { Reducer } from 'react'
import { ok, pending, isOK } from '~/models/result'
import Turn, { DEFAULT_VALUE } from '~/models/turn'
import * as actions from './actions'

export type State = Turn
export type Action = ReturnType<typeof actions[keyof typeof actions]>

const hasBoardIndex = (idx: number) => (result: State[number]) =>
  isOK(result) && result.value[0] === idx

const applyMove = (state: State, action: Extract<Action, { type: 'move' }>): State => {
  const existingIdx = state.findIndex(hasBoardIndex(action.payload.boardIndex))
  console.log('apply existing', existingIdx)
  const moveableState = existingIdx === -1 ? state : update(existingIdx, pending, state)
  return update(
    action.payload.rollIndex,
    ok([action.payload.boardIndex, action.payload.attributes]),
    moveableState,
  ) as Turn
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'move':
      return applyMove(state, action)
    case 'reset':
      return DEFAULT_VALUE
    case 'undo':
      return update(action.payload, pending, state) as Turn
    default:
      return state
  }
}

export default reducer
