import { MutableRefObject, useCallback, useEffect, useState } from 'react'
import { isOK, pending, PendingResult, Result, ok, error } from '~/models/result'

type ToResult<T> = (result: Result<unknown>) => Result<T>

const getContextValueFromTarget = (target: EventTarget): Result<number> => {
  try {
    const value = (target as any).getAttribute('data-context-value')
    return value !== null
      ? ok(value)
      : (target as any).parentElement !== null
      ? getContextValueFromTarget((target as any).parentElement)
      : error(undefined)
  } catch {
    return error(undefined)
  }
}

const useContextValue = <T>(
  element: MutableRefObject<HTMLElement>,
  toResult: ToResult<T>,
): [value: PendingResult<T>, reset: () => void] => {
  const [value, setValue] = useState<PendingResult<T>>(pending)
  const reset = useCallback(() => setValue(pending), [setValue])

  useEffect(() => {
    const cb = (event: globalThis.MouseEvent) => {
      event.preventDefault()
      const result = toResult(getContextValueFromTarget(event.target))
      if (isOK(result)) {
        setValue(result)
      }
    }

    if (element.current) {
      element.current.addEventListener('contextmenu', cb)
    }

    return () => element.current?.removeEventListener('contextmenu', cb)
  }, [element.current, setValue])

  return [value, reset]
}

export default useContextValue
