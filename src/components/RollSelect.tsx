import { Box, Grid } from '@chakra-ui/react'
import { update } from 'ramda'
import { FC, useCallback, useState } from 'react'
import { PendingResult, pending, ok, unwrapOr, isOK } from '~/models/result'
import { DieFace, NORMAL_FACES, JUNCTION_FACES } from '~/models/routes'
import Die from './Die'
import useRoutes from './hooks/useRoll'
import Prompt from './Prompt'

// type RouteResult = ReturnType<typeof useRoutes>[0][number]
type PromptResult = PendingResult<number>

const ROUTE_OPTIONS = [NORMAL_FACES, NORMAL_FACES, NORMAL_FACES, JUNCTION_FACES]

const RouteSelect: FC = () => {
  const [[r0, r1, r2, r3], setRoutes] = useRoutes()
  const [promptResult, setPromptResult] = useState<PromptResult>(pending)

  const onClose = useCallback(() => setPromptResult(pending), [setPromptResult])

  const toOnClickFor = (idx: number) => () => setPromptResult(ok(idx))
  const toOnSelectFor = (idx: number) => (route: DieFace) => {
    setRoutes(update(idx, ok(route)) as any) // TODO
    onClose()
  }

  return (
    <Box as="fieldset" marginBottom="20px">
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
    </Box>
  )
}

export default RouteSelect
