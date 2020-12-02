import { useContext } from 'react'
import CONTEXT from '../contexts/routes'

const useRoutes = (ctx: typeof CONTEXT = CONTEXT) => useContext(ctx)
export default useRoutes
