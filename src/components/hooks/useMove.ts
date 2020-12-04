import { useCallback } from 'react'
import useTurn, { move } from './useTurn'

const useMove = () => {
  const [, dispatch] = useTurn()
  return useCallback(
    (boardIdx: number) => (rollIdx: number) => dispatch(move(rollIdx, boardIdx)),
    [dispatch, move],
  )
}

export default useMove
