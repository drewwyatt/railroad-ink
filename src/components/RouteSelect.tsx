import { Grid } from '@chakra-ui/react'
import { update } from 'ramda'
import { FC, useCallback, useState } from 'react'
import { useRoutes } from './routes'
import Die from './Die'
import { PendingResult, pending, ok, unwrapOr, isOK } from '~/models/result'
import Route, { NORMAL_ROUTES, JUNCTION_ROUTES } from '~/models/routes'
import Prompt from './Prompt'

type RouteResult = ReturnType<typeof useRoutes>[0][number]
type PromptResult = PendingResult<number>

const ROUTE_OPTIONS = [NORMAL_ROUTES, NORMAL_ROUTES, NORMAL_ROUTES, JUNCTION_ROUTES]

const RouteSelect: FC = () => {
  const [[r0, r1, r2, r3], setRoutes] = useRoutes()
  const [promptResult, setPromptResult] = useState<PromptResult>(pending)
  const toOnClickFor = useCallback((idx: number) => () => setPromptResult(ok(idx)), [
    setPromptResult,
  ])
  const onClose = useCallback(() => setPromptResult(pending), [setPromptResult])
  const toOnSelectFor = useCallback(
    (idx: number) => (route: Route) => {
      setRoutes(update(idx, ok(route)) as any) // TODO
      onClose()
    },
    [setRoutes, onClose],
  )

  return (
    <fieldset>
      <legend>Select Routes for Round</legend>
      <Grid templateColumns="repeat(4, 1fr)" gap="2">
        <Die face={unwrapOr(undefined, r0)} onClick={toOnClickFor(0)} />
        <Die face={unwrapOr(undefined, r1)} onClick={toOnClickFor(1)} />
        <Die face={unwrapOr(undefined, r2)} onClick={toOnClickFor(2)} />
        <Die face={unwrapOr(undefined, r3)} onClick={toOnClickFor(3)} />
      </Grid>
      {isOK(promptResult) && (
        <Prompt
          options={ROUTE_OPTIONS[promptResult.value]}
          onClose={onClose}
          onSelect={toOnSelectFor(promptResult.value)}
        />
      )}
    </fieldset>
  )
}

export default RouteSelect
