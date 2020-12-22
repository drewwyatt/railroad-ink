import { Adjustment, Attributes, SpecialFace } from '~/models/routes'

export const select = (face: SpecialFace, boardIdx: number, attributes: Attributes) =>
  ({
    type: 'select',
    payload: { face, boardIdx, attributes },
  } as const)

export const adjust = (adjustment: Adjustment) =>
  ({
    type: 'adjust',
    payload: adjustment,
  } as const)

export const clearSelection = () => ({ type: 'clear' } as const)

export const apply = () => ({ type: 'apply' } as const)
