import type { Attributes } from '~/models/routes'

export const move = (rollIndex: number, boardIndex: number, attributes: Attributes) =>
  ({ type: 'move', payload: { rollIndex, boardIndex, attributes } } as const)

export const undo = (rollIndex: number) =>
  ({
    type: 'undo',
    payload: rollIndex,
  } as const)

export const reset = () => ({ type: 'reset' } as const)

/**
 * This is an effect creator
 */
export const apply = () => ({ type: 'apply' } as const)
