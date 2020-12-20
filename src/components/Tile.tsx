import { FC, useCallback, useMemo } from 'react'
import { PendingResult, valueEq, ok } from '~/models/result'
import { Adjustment, applyAdjustment, Route } from '~/models/routes'
import AttributeSelect from './AttributeSelect'
import Die from './Die'
import { useAltClickValue, usePendingMoves } from './hooks'
import useSpecials, { adjust } from './hooks/useSpecials'
import useTurn, { move } from './hooks/useTurn'

type Props = {
  index: number
  route: Route
  onSelect(index: PendingResult<number>): void
}

const Tile: FC<Props> = ({ index, onSelect: parentOnSelect, route }) => {
  const [context, clearContext] = useAltClickValue()
  const pendingMoves = usePendingMoves()
  const [{ selection: selectedSpecial }, dispatch] = useSpecials()
  const [, takeTurn] = useTurn()

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

  const onSelect = useCallback(() => parentOnSelect(ok(index)), [index, parentOnSelect])

  const onAdjust = useCallback(
    (adjustment: Adjustment) => {
      if (pendingMove) {
        takeTurn(
          move(
            pendingMove.rollIdx,
            index,
            applyAdjustment(adjustment, pendingMove.attributes),
          ),
        )
      } else if (pendingSpecial) {
        dispatch(adjust(adjustment))
      }
    },
    [pendingMove, pendingSpecial, takeTurn],
  )

  return (
    <AttributeSelect
      for={face}
      isOpen={valueEq(index, context)}
      onClose={clearContext}
      onSelect={onAdjust}
    >
      <Die {...attribuutes} data-context-value={index} face={face} onClick={onSelect} />
    </AttributeSelect>
  )
}

export default Tile
