import { OKType, PendingResult, pending } from './result'
import type { Attributes } from './routes'

type Move = [boardIndex: number, attributes: Attributes]

type Turn = [
  PendingResult<Move>,
  PendingResult<Move>,
  PendingResult<Move>,
  PendingResult<Move>,
]
export type CompleteTurn = [OKType<Move>, OKType<Move>, OKType<Move>, OKType<Move>]

export const DEFAULT_VALUE: Turn = [pending, pending, pending, pending]

export default Turn
