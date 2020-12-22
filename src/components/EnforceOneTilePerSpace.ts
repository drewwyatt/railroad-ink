import { FC, useEffect, useRef } from 'react'
import { Result, error, isOK } from '~/models/result'
import Turn, { Move } from '~/models/turn'
import useSpecials, { clearBoardIdx } from './hooks/useSpecials'
import useTurn from './hooks/useTurn'

const usePrevious = <T>(value: T): T => {
  const ref = useRef<T>(value)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const toNewestMoveFromTurn = (turn: Turn, prevTurn: Turn): Result<Move> => {
  let newIdx = -1
  for (const idx in turn) {
    if (isOK(turn[idx]) && turn[idx] !== prevTurn[idx]) {
      newIdx = (idx as any) as number
    }
  }

  return newIdx > -1 ? (turn[newIdx] as Result<Move>) : error(undefined)
}

// TODO: this is a hack. merge specials into turn context
const EnforceOneTilePerSpace: FC = () => {
  const [turn, tDispatch] = useTurn()
  const [specials, sDispatch] = useSpecials()
  const prevturn = usePrevious(turn)
  const prevSpec = usePrevious(specials)

  useEffect(() => {
    if (specials !== prevSpec && specials.selection) {
      tDispatch(clearBoardIdx(specials.selection.move[0]))
    } else if (turn !== prevturn) {
      const move = toNewestMoveFromTurn(turn, prevturn)
      if (isOK(move)) {
        sDispatch(clearBoardIdx(move.value[0]))
      }
    }
  }, [turn, specials, tDispatch, sDispatch])

  return null
}

export default EnforceOneTilePerSpace
