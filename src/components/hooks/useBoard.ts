import { useContext } from 'react'
import CONTEXT from '../contexts/board'

const useBoard = (ctx: typeof CONTEXT = CONTEXT) => useContext(ctx)

export * from '../contexts/board/actions'
export default useBoard
