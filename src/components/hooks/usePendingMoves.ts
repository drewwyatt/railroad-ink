import { useMemo } from 'react'
import { isOK } from '~/models/result'
import type Route from '~/models/routes'
import useRoutes from './useRoutes'
import useTurn from './useTurn'

export type PendingMove = [boardIdx: number, route: Route]

const usePendingMoves = () => {
  const [routes] = useRoutes()
  const [turn] = useTurn()

  return useMemo(
    () =>
      routes.reduce((acc, route, idx) => {
        const move = turn[idx]
        if (isOK(route) && isOK(move)) {
          acc.push([move.value, route.value])
        }

        return acc
      }, [] as PendingMove[]),
    [routes, turn],
  )
}

export default usePendingMoves
