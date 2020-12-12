import type { Route } from '~/models/routes'

type Move = [boardIndex: number, route: Route]
export const applyTurn = (moves: Move[]) =>
  ({ type: 'applyTurn', payload: moves } as const)

export const reset = () => ({ type: 'reset' } as const)
