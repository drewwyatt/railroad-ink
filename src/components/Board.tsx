import { Grid } from '@chakra-ui/react'
import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { WIDTH, HEIGHT } from '~/models/board'
import {
  PendingResult,
  Result,
  pending,
  ok,
  isOK,
  forceUnwrap,
  valueEq,
  error,
} from '~/models/result'
import { DieFace, DEFAULT_ATTRIBUTES, applyAdjustment, Adjustment } from '~/models/routes'
import AttributeSelect from './AttributeSelect'
import Die from './Die'
import { useBoard, useContextValue, usePendingMoves, useRoll } from './hooks'
import useTurn, { move } from './hooks/useTurn'
import Prompt from './Prompt'

const toNumber = (result: Result<unknown>): Result<number> => {
  if (isOK(result)) {
    const value = Number(result.value)
    return Number.isInteger(value) ? ok(value) : error(undefined)
  }

  return error(undefined)
}

const useClosePopupIfNoRoute = (
  pendingMoves: ReturnType<typeof usePendingMoves>,
  ...contextValueProps: ReturnType<typeof useContextValue>
) => {
  const [selectingAttributeFor, closePopup] = contextValueProps
  useEffect(() => {
    if (isOK(selectingAttributeFor)) {
      const pendingMove = pendingMoves.find(
        ({ boardIdx }) => boardIdx === selectingAttributeFor.value,
      )
      if (!pendingMove) {
        closePopup()
      }
    }
  }, [pendingMoves, selectingAttributeFor, closePopup])
}

const Board: FC = () => {
  const [commitedMoves] = useBoard()
  const grid = useRef() as MutableRefObject<HTMLElement>
  const [selectingAttributeFor, closePopup] = useContextValue(grid, toNumber)
  const pendingMoves = usePendingMoves()
  const [selectedSpace, setSelectedSpace] = useState<PendingResult<number>>(pending)
  const [, takeTurn] = useTurn()
  const [roll] = useRoll()
  useClosePopupIfNoRoute(pendingMoves, selectingAttributeFor, closePopup)

  const closePrompt = useCallback(() => setSelectedSpace(pending), [setSelectedSpace])

  const onDieClickForIdx = useCallback(
    (idx: number) => () => {
      setSelectedSpace(ok(idx))
    },
    [setSelectedSpace],
  )

  const onMove = useCallback(
    (_: DieFace, rollIdx: number) => {
      if (isOK(selectedSpace)) {
        takeTurn(move(rollIdx, selectedSpace.value, DEFAULT_ATTRIBUTES))
        closePrompt()
      }
    },
    [selectedSpace, setSelectedSpace, takeTurn, move, closePrompt],
  )

  const onAdjust = useCallback(
    (rollIdx: number) => (adjustment: Adjustment) => {
      const pendingMove = pendingMoves.find(p => p.rollIdx === rollIdx)
      if (pendingMove) {
        takeTurn(
          move(
            rollIdx,
            pendingMove.boardIdx,
            applyAdjustment(adjustment, pendingMove.attributes),
          ),
        )
      }
    },
    [pendingMoves, takeTurn, move],
  )

  return useMemo(
    () => (
      <>
        <Grid
          as="article"
          ref={grid as any}
          templateColumns={`repeat(${WIDTH}, 1fr)`}
          templateRows={`repeat(${HEIGHT}, 1fr)`}
        >
          {commitedMoves.map((committed, idx) => {
            const pendingMove = pendingMoves.find(({ boardIdx }) => boardIdx === idx)
            const face = pendingMove?.face ?? committed[0]
            const attributes = pendingMove?.attributes ?? committed[1]
            return (
              <AttributeSelect
                key={[idx, face].join('-')}
                isOpen={valueEq(idx, selectingAttributeFor)}
                onClose={closePopup}
                onSelect={onAdjust(pendingMove?.rollIdx)}
              >
                <Die
                  {...attributes}
                  data-context-value={idx}
                  face={face}
                  onClick={onDieClickForIdx(idx)}
                />
              </AttributeSelect>
            )
          })}
        </Grid>
        {isOK(selectedSpace) && (
          <Prompt
            title="Select a route"
            options={roll.map(forceUnwrap)}
            onClose={closePrompt}
            onSelect={onMove}
          />
        )}
      </>
    ),
    [commitedMoves, pendingMoves, selectedSpace, selectingAttributeFor, closePopup],
  )
}

export default Board
