import { Box, Grid } from '@chakra-ui/react'
import { update, zip } from 'ramda'
import { FC, useCallback, useMemo, useState } from 'react'
import { PendingResult, pending, ok, unwrapOr, isOK } from '~/models/result'
import { DieFace, NORMAL_FACES, JUNCTION_FACES } from '~/models/routes'
import { Move } from '~/models/turn'
import Die, { Rolled } from './Die'
import { useRoll, useTurn } from './hooks'
import Prompt from './Prompt'

type Dice = [PendingResult<DieFace>, PendingResult<Move>][]
type PromptResult = PendingResult<number>

const ROUTE_OPTIONS = [NORMAL_FACES, NORMAL_FACES, NORMAL_FACES, JUNCTION_FACES]

const RouteSelect: FC = () => {
  const [rolls, setRoll] = useRoll()
  const [turn] = useTurn()
  const [promptResult, setPromptResult] = useState<PromptResult>(pending)

  const dice = useMemo<Dice>(() => zip(rolls, turn), [rolls, turn])

  const onClose = useCallback(() => setPromptResult(pending), [setPromptResult])

  const toOnClickFor = (idx: number) => () => setPromptResult(ok(idx))
  const toOnSelectFor = (idx: number) => (route: DieFace) => {
    setRoll(update(idx, ok(route)) as any) // TODO
    onClose()
  }

  return (
    <Box as="fieldset" marginBottom="20px" userSelect="none">
      <legend>Select Routes for Round</legend>
      <Grid templateColumns="repeat(4, 1fr)" gap="2">
        {dice.map(([face, move], idx) => (
          <Rolled allocated={isOK(move)} key={['rolled-die', idx].join('-')}>
            <Die face={unwrapOr(undefined, face)} onClick={toOnClickFor(idx)} />
          </Rolled>
        ))}
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
