import { FC, useCallback, useMemo, useState } from 'react'
import { PendingResult, isOK } from '~/models/result'
import { SelectFrom } from './models'
import SelectFromRoll from './SelectFromRoll'
import SelectFromSpecials from './SelectFromSpecials'

type Props = {
  boardIdx: PendingResult<number>
  onClose(): void
}

const MoveSelect: FC<Props> = ({ boardIdx, onClose }) => {
  const [type, setType] = useState(SelectFrom.roll)

  const toggleRoutes = useCallback(() => {
    setType(t => (t === SelectFrom.roll ? SelectFrom.specials : SelectFrom.roll))
  }, [setType])

  return useMemo(
    () =>
      isOK(boardIdx) ? (
        type === SelectFrom.roll ? (
          <SelectFromRoll
            boardIdx={boardIdx.value}
            onClose={onClose}
            toggleRoutes={toggleRoutes}
          />
        ) : (
          <SelectFromSpecials
            boardIdx={boardIdx.value}
            onClose={onClose}
            toggleRoutes={toggleRoutes}
          />
        )
      ) : null,
    [type, boardIdx],
  )
}

export default MoveSelect
