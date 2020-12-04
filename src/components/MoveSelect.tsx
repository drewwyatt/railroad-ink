import { Box, Grid } from '@chakra-ui/react'
import { update } from 'ramda'
import { FC, useCallback, useState } from 'react'
import useRoutes from './hooks/useRoutes'
import Die from './Die'
import { PendingResult, pending, ok, unwrapOr, isOK } from '~/models/result'
import Route, { NORMAL_ROUTES, JUNCTION_ROUTES } from '~/models/routes'
import Prompt from './Prompt'

// type RouteResult = ReturnType<typeof useRoutes>[0][number]
type PromptResult = PendingResult<number>

const ROUTE_OPTIONS = [NORMAL_ROUTES, NORMAL_ROUTES, NORMAL_ROUTES, JUNCTION_ROUTES]

const RouteSelect: FC = () => {
  const [[r0, r1, r2, r3], setRoutes] = useRoutes()

  return (
    <Prompt
      options={ROUTE_OPTIONS[promptResult.value]}
      onClose={onClose}
      onSelect={toOnSelectFor(promptResult.value)}
    />
  )
}

export default RouteSelect
