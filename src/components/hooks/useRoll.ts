import { useContext } from 'react'
import CONTEXT, { DEFAULT_ROLL } from '../contexts/roll'

const useRoll = (ctx: typeof CONTEXT = CONTEXT) => useContext(ctx)
export default useRoll
export { DEFAULT_ROLL }
