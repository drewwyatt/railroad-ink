import { Button } from '@chakra-ui/react'
import { FC, useCallback, useMemo } from 'react'
import { isOK } from '~/models/result'
import useTurn, { apply } from './hooks/useTurn'

const NextTurn: FC = () => {
  const [turn, takeTurn] = useTurn()
  const assignedAllMoves = useMemo(() => turn.every(isOK), [turn])
  const onClick = useCallback(() => {
    if (assignedAllMoves) {
      takeTurn(apply())
    }
  }, [apply, assignedAllMoves, takeTurn])

  return (
    <Button disabled={!assignedAllMoves} onClick={onClick}>
      Next Turn
    </Button>
  )
}

export default NextTurn
