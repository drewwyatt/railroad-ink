type ResultBrand<T extends string> = {
  type: T
}

export interface OKType<T> extends ResultBrand<'OK'> {
  value: T
}

export interface ErrorType<T = unknown> extends ResultBrand<'ERROR'> {
  value: T
}

export type Pending = ResultBrand<'PENDING'>

export type Result<OK, Err = unknown> = OKType<OK> | ErrorType<Err>
export type PendingResult<OK, Err = unknown> = Result<OK, Err> | Pending

export const ok = <T>(value: T) => ({ type: 'OK', value } as OKType<T>)
export const error = <T>(value: T) => ({ type: 'ERROR', value } as ErrorType<T>)
export const pending: Pending = { type: 'PENDING' }
