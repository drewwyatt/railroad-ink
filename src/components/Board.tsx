import { Grid } from '@chakra-ui/react'
import { FC, useCallback, useMemo, useState } from 'react'
import { WIDTH, HEIGHT } from '~/models/board'
import { PendingResult, pending, ok, isOK, forceUnwrap } from '~/models/result'
import useBoard from './hooks/useBoard'
import usePendingMoves from './hooks/usePendingMoves'
import Die from './Die'
import useRoutes from './hooks/useRoutes'
import useTurn, { move } from './hooks/useTurn'
import Prompt from './Prompt'
import Route from '~/models/routes'

const Board: FC = () => {
  const [commitedMoves] = useBoard()
  const pendingMoves = usePendingMoves()
  const [selectedSpace, setSelectedSpace] = useState<PendingResult<number>>(pending)
  const [, takeTurn] = useTurn()
  const [routes] = useRoutes()

  const closePrompt = useCallback(() => setSelectedSpace(pending), [setSelectedSpace])

  const onSpaceSelectForIdx = useCallback(
    (idx: number) => () => {
      setSelectedSpace(ok(idx))
    },
    [setSelectedSpace],
  )

  const onMove = useCallback(
    (_: Route, rollIdx: number) => {
      if (isOK(selectedSpace)) {
        takeTurn(move(rollIdx, selectedSpace.value))
        closePrompt()
      }
    },
    [selectedSpace, setSelectedSpace, takeTurn, move, closePrompt],
  )

  return useMemo(
    () => (
      <>
        <Grid
          as="article"
          templateColumns={`repeat(${WIDTH}, 1fr)`}
          templateRows={`repeat(${HEIGHT}, 1fr)`}
        >
          {commitedMoves.map((committed, idx) => {
            const face =
              pendingMoves.find(([boardIdx]) => boardIdx === idx)?.[1] ?? committed
            return <Die key={idx} face={face} onClick={onSpaceSelectForIdx(idx)} />
          })}
        </Grid>
        {isOK(selectedSpace) && (
          <Prompt
            title="Select a route"
            options={routes.map(forceUnwrap)}
            onClose={closePrompt}
            onSelect={onMove}
          />
        )}
      </>
    ),
    [commitedMoves, pendingMoves, selectedSpace],
  )
}

export default Board
