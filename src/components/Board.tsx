import { Grid } from '@chakra-ui/react'
import { FC } from 'react'
import { WIDTH, HEIGHT } from '~/models/board'
import useBoard from './hooks/useBoard'
import Die from './Die'

const Board: FC = () => {
  const [commitedMoves] = useBoard()
  return (
    <Grid
      as="article"
      templateColumns={`repeat(${WIDTH}, 1fr)`}
      templateRows={`repeat(${HEIGHT}, 1fr)`}
    >
      {commitedMoves.map(face => (
        <Die key={face} face={face} />
      ))}
    </Grid>
  )
}

export default Board
