import { OKType, PendingResult, pending } from './result'

type Turn = [
  PendingResult<number>,
  PendingResult<number>,
  PendingResult<number>,
  PendingResult<number>,
]
export type CompleteTurn = [
  OKType<number>,
  OKType<number>,
  OKType<number>,
  OKType<number>,
]

export const DEFAULT_VALUE: Turn = [pending, pending, pending, pending]

export default Turn
