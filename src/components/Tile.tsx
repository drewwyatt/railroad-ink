import { FC, useCallback, useMemo } from 'react'
import { PendingResult, ok } from '~/models/result'
import { Route } from '~/models/routes'
import Die from './Die'
import { usePendingMoves, useSpecials } from './hooks'

type Props = {
  index: number
  route: Route
  onSelect(index: PendingResult<number>): void
}

const Tile: FC<Props> = ({ index, onSelect: parentOnSelect, route }) => {
  const pendingMoves = usePendingMoves()
  const [{ selection: selectedSpecial }] = useSpecials()

  const pendingMove = useMemo(
    () => pendingMoves.find(({ boardIdx }) => boardIdx === index),
    [index, pendingMoves],
  )

  const pendingSpecial = useMemo(
    () => (index === selectedSpecial?.move[0] ? selectedSpecial : undefined),
    [index, selectedSpecial],
  )

  const attribuutes = useMemo(
    () => pendingMove?.attributes ?? pendingSpecial?.move[1] ?? route[1],
    [index, pendingMove, route, pendingSpecial],
  )

  const face = useMemo(() => pendingMove?.face ?? pendingSpecial?.face ?? route[0], [
    index,
    pendingMove,
    route,
    pendingSpecial,
  ])

  const onSelect = useCallback(() => {
    parentOnSelect(ok(index))
  }, [index, parentOnSelect])

  return <Die {...attribuutes} face={face} onClick={onSelect} />
}

export default Tile
