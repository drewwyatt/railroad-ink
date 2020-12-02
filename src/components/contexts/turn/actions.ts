export const move = (rollIndex: number, boardIndex: number) =>
  ({ type: 'move', payload: { rollIndex, boardIndex } } as const)

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
