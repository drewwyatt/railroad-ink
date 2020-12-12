import { Dispatch, FC, createContext, useState } from 'react'
import { PendingResult, pending } from '~/models/result'
import type { NormalFace, JunctionFace } from '~/models/routes'

type Routes = [
  PendingResult<NormalFace>,
  PendingResult<NormalFace>,
  PendingResult<NormalFace>,
  PendingResult<JunctionFace>,
]

export const DEFAULT_ROLL = [pending, pending, pending, pending] as Routes
const CONTEXT = createContext<[Routes, Dispatch<Routes>]>([DEFAULT_ROLL, () => null])

export const RollProvider: FC = ({ children }) => (
  <CONTEXT.Provider value={useState(DEFAULT_ROLL)}>{children}</CONTEXT.Provider>
)
export default CONTEXT
