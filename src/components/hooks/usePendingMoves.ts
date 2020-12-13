import { useEffect, useMemo, useRef } from 'react'
import { isOK, unwrapOr } from '~/models/result'
import { Attributes, DEFAULT_ATTRIBUTES, DieFace } from '~/models/routes'
import useRoll from './useRoll'
import useTurn, { move } from './useTurn'

export type PendingMove = {
  boardIdx: number
  face: DieFace
  attributes: Attributes
  rollIdx: number
}

const usePendingMoves = () => {
  const [roll] = useRoll()
  const [turn, takeTurn] = useTurn()
  const prevRoll = useRef(roll)

  useEffect(() => {
    roll.forEach((r, idx) => {
      if (
        unwrapOr(undefined, r as any) !==
          unwrapOr(undefined, prevRoll.current[idx] as any) &&
        isOK(r) &&
        isOK(turn[idx]) &&
        (turn[idx] as any).value[1] !== DEFAULT_ATTRIBUTES
      ) {
        takeTurn(move(idx, (turn[idx] as any).value[0] as any, DEFAULT_ATTRIBUTES))
      }
    })
    prevRoll.current = roll
  }, [roll, turn])

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
