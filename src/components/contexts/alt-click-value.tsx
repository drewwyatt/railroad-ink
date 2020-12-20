import {
  MutableRefObject,
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react'
import { PendingResult, Result, isOK, error, ok, pending } from '~/models/result'

type Context<T> = [PendingResult<T>, () => void]
const CONTEXT = createContext<Context<any>>([pending, () => null])
type Transform<T> = (result: Result<unknown>) => Result<T>

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

type Props<T> = {
  children: React.ReactNode
  on: MutableRefObject<HTMLElement>
  transform: Transform<T>
}

export const AltClickValueProvider = <T extends any>({
  children,
  on: element,
  transform,
}: Props<T>) => {
  const [value, setValue] = useState<PendingResult<T>>(pending)
  const clear = useCallback(() => setValue(pending), [setValue])

  useEffect(() => {
    const cb = (event: globalThis.MouseEvent) => {
      event.preventDefault()
      const result = transform(getContextValueFromTarget(event.target))
      if (isOK(result)) {
        setValue(result)
      }
    }

    if (element.current) {
      element.current.addEventListener('contextmenu', cb)
    }

    return () => element.current?.removeEventListener('contextmenu', cb)
  }, [element.current, setValue])

  return <CONTEXT.Provider value={[value, clear]}>{children}</CONTEXT.Provider>
}

export const useAltClickValue = <T extends any>(
  ctx: typeof CONTEXT = CONTEXT,
): [PendingResult<T>, () => void] => useContext(ctx)

export default CONTEXT
