import { Dispatch, FC, createContext, useContext, useState } from 'react'
import { PendingResult, pending } from '~/models/result'
import type { NormalRoute, JunctionRoute } from '~/models/routes'

type Routes = [
  PendingResult<NormalRoute>,
  PendingResult<NormalRoute>,
  PendingResult<JunctionRoute>,
]

const DEFAULT_ROUTES = [pending, pending, pending] as Routes
const CONTEXT = createContext<[Routes, Dispatch<Routes>]>([DEFAULT_ROUTES, () => null])

export const RoutesProvider: FC = ({ children }) => (
  <CONTEXT.Provider value={useState(DEFAULT_ROUTES)}>{children}</CONTEXT.Provider>
)

export const useRoutes = (ctx: typeof CONTEXT = CONTEXT) => useContext(ctx)

export default CONTEXT
