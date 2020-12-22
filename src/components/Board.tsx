import { Grid } from '@chakra-ui/react'
import React, { FC, MutableRefObject, useCallback, useRef, useState } from 'react'
import { WIDTH, HEIGHT } from '~/models/board'
import { PendingResult, pending } from '~/models/result'
import SideExits from './exits/SideExits'
import TopExits from './exits/TopExits'
import { useBoard } from './hooks'
import MoveSelect from './MoveSelect'
import Tile from './Tile'

const Board: FC = () => {
  const [commitedMoves] = useBoard()
  const grid = useRef() as MutableRefObject<HTMLElement>
  const [selectedSpace, setSelectedSpace] = useState<PendingResult<number>>(pending)

  const closePrompt = useCallback(() => setSelectedSpace(pending), [setSelectedSpace])

  return (
    <Grid templateColumns="15px auto 15px" templateRows="20px auto 20px">
      <TopExits />
      <SideExits />
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
      <SideExits transform="rotate(180deg)" />
      <TopExits />
    </Grid>
  )
}

export default Board
