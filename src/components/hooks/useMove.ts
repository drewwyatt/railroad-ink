import { useCallback } from 'react'
import { DEFAULT_ATTRIBUTES } from '~/models/routes'
import useTurn, { move } from './useTurn'

const useMove = () => {
  const [, dispatch] = useTurn()
  return useCallback(
    (boardIdx: number) => (rollIdx: number) =>
      dispatch(move(rollIdx, boardIdx, DEFAULT_ATTRIBUTES)),
    [dispatch, move],
  )
}

export default useMove
