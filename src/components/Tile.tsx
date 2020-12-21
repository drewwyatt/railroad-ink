import { FC, useCallback, useMemo, useRef, useState } from 'react'
import { useLongPress, LongPressDetectEvents } from 'use-long-press'
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

const useIosLongPress = () => {
  const cancelled = useRef(false)
  const [value, setDidPress] = useState(false)

  const cb = useCallback(() => {
    if (!cancelled.current) {
      setDidPress(true)
    }
  }, [cancelled.current, setDidPress])

  const bind = useLongPress(cb, {
    threshold: 1200,
    detect: LongPressDetectEvents.TOUCH,
    onStart: () => {
      cancelled.current = false
    },
    onCancel: () => {
      cancelled.current = true
    },
  })
  const clear = useCallback(() => setDidPress(false), [setDidPress])

  return {
    bind,
    clear,
    value,
  }
}

const Tile: FC<Props> = ({ index, onSelect: parentOnSelect, route }) => {
  const [context, clearContext] = useAltClickValue()
  const pendingMoves = usePendingMoves()
  const [{ selection: selectedSpecial }, dispatch] = useSpecials()
  const [, takeTurn] = useTurn()
  const longpress = useIosLongPress()
  const closeAttributeSelect = useCallback(() => {
    clearContext()
    longpress.clear()
  }, [longpress.clear, clearContext])

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
  }, [index, parentOnSelect, longpress.bind])

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
      isOpen={longpress.value || valueEq(index, context)}
      onClose={closeAttributeSelect}
      onSelect={onAdjust}
    >
      <Die
        {...attribuutes}
        {...longpress.bind}
        data-context-value={index}
        face={face}
        onClick={onSelect}
      />
    </AttributeSelect>
  )
}

export default Tile
