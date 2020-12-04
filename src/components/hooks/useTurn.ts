import { useContext } from 'react'
import CONTEXT from '../contexts/turn'

const useTurn = (ctx: typeof CONTEXT = CONTEXT) => useContext(ctx)

export * from '../contexts/turn/actions'
export default useTurn
