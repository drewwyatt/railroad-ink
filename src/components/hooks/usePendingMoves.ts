import { useMemo } from 'react'
import { isOK } from '~/models/result'
import type { Attributes, DieFace } from '~/models/routes'
import useRoll from './useRoll'
import useTurn from './useTurn'

export type PendingMove = {
  boardIdx: number
  face: DieFace
  attributes: Attributes
  rollIdx: number
}

const usePendingMoves = () => {
  const [roll] = useRoll()
  const [turn] = useTurn()

  return useMemo(
    () =>
      roll.reduce((acc, route, idx) => {
        const move = turn[idx]
        if (isOK(route) && isOK(move)) {
          acc.push({
            boardIdx: move.value[0],
            face: route.value,
            attributes: move.value[1],
            rollIdx: idx,
          })
        }

        return acc
      }, [] as PendingMove[]),
    [roll, turn],
  )
}

export default usePendingMoves
