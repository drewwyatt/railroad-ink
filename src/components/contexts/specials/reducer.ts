import { Reducer } from 'react'
import {
  applyAdjustment,
  DEFAULT_ATTRIBUTES,
  SpecialFace,
  SPECIAL_FACES,
} from '~/models/routes'
import { Move } from '~/models/turn'
import * as actions from './actions'

type Selection = {
  face: SpecialFace
  move: Move
}

export type Action = ReturnType<typeof actions[keyof typeof actions]>
export type State = {
  available: Set<SpecialFace>
  selection?: Selection
  previousTurns: Selection[]
}

export const DEFAULT_STATE: State = {
  available: new Set(SPECIAL_FACES),
  previousTurns: [],
}

function guardSelectionExists(state: State): asserts state is Required<State> {
  if (!state.selection) {
    throw new Error(
      `Cannot adjust special route without making a section. Found: ${state}`,
    )
  }
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'adjust':
      guardSelectionExists(state)
      return {
        ...state,
        selection: {
          face: state.selection.face,
          move: [
            state.selection.move[0],
            applyAdjustment(action.payload, state.selection.move[1]),
          ],
        },
      }
    case 'clear':
      return {
        ...state,
        selection: undefined,
      }
    case 'apply': {
      const selection = state.selection
      if (selection) {
        const available = new Set(state.available)
        available.delete(state.selection.face)
        return {
          available,
          previousTurns: [...state.previousTurns, state.selection],
        }
      }

      return state
    }
    case 'select':
      // TODO: make sure face is available?
      return {
        ...state,
        selection: {
          face: action.payload.face,
          move: [action.payload.boardIdx, DEFAULT_ATTRIBUTES],
        },
      }
    default:
      return state
  }
}

export default reducer
