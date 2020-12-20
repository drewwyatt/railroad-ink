import { Box, Grid, Spacer } from '@chakra-ui/react'
import React, { FC, MutableRefObject, useCallback, useRef, useState } from 'react'
import { WIDTH, HEIGHT } from '~/models/board'
import { PendingResult, Result, pending, ok, isOK, error } from '~/models/result'
import { AltClickValueProvider } from './contexts/alt-click-value'
import SideExits from './exits/SideExits'
import TopExits from './exits/TopExits'
import { useBoard } from './hooks'
import MoveSelect from './MoveSelect'
import Tile from './Tile'

const toNumber = (result: Result<unknown>): Result<number> => {
  if (isOK(result)) {
    const value = Number(result.value)
    return Number.isInteger(value) ? ok(value) : error(undefined)
  }

  return error(undefined)
}

const Board: FC = () => {
  const [commitedMoves] = useBoard()
  const grid = useRef() as MutableRefObject<HTMLElement>
  const [selectedSpace, setSelectedSpace] = useState<PendingResult<number>>(pending)

  const closePrompt = useCallback(() => setSelectedSpace(pending), [setSelectedSpace])

  return (
    <Grid templateColumns="20px auto 20px" templateRows="20px auto 20px">
      <TopExits />
      <SideExits />
      <AltClickValueProvider on={grid} transform={toNumber}>
        <Grid
          as="article"
          ref={grid as any}
          templateColumns={`repeat(${WIDTH}, 1fr)`}
          templateRows={`repeat(${HEIGHT}, 1fr)`}
        >
          {commitedMoves.map((committed, idx) => (
            <Tile key={idx} index={idx} route={committed} onSelect={setSelectedSpace} />
          ))}
        </Grid>
        <MoveSelect boardIdx={selectedSpace} onClose={closePrompt} />
      </AltClickValueProvider>
      <SideExits transform="rotate(180deg)" />
      <TopExits />
    </Grid>
  )
}

export default Board
