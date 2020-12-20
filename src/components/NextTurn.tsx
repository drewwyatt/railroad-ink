import { Button } from '@chakra-ui/react'
import { FC, useCallback, useMemo } from 'react'
import { isOK } from '~/models/result'
import useSpecials, { apply as applyS } from './hooks/useSpecials'
import useTurn, { apply as applyT } from './hooks/useTurn'

const NextTurn: FC = () => {
  const [, dSpecials] = useSpecials()
  const [turn, takeTurn] = useTurn()
  const assignedAllMoves = useMemo(() => turn.every(isOK), [turn])
  const onClick = useCallback(() => {
    if (assignedAllMoves) {
      takeTurn(applyT())
      dSpecials(applyS())
    }
  }, [applyS, applyT, assignedAllMoves, dSpecials, takeTurn])

  return (
    <Button disabled={!assignedAllMoves} onClick={onClick}>
      Next Turn
    </Button>
  )
}

export default NextTurn
