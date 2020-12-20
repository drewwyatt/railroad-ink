import { FC, useCallback, useMemo } from 'react'
import { DEFAULT_ATTRIBUTES } from '~/models/routes'
import useTurn, { move } from '../hooks/useTurn'
import Prompt from '../Prompt'
import { useOptionsFromRoll } from './hooks'
import { SelectFrom } from './models'
import { toFooter } from './utils'

type Props = {
  boardIdx: number

  onClose(): void
  toggleRoutes(): void
}

const SelectFromRoll: FC<Props> = ({ boardIdx, onClose, toggleRoutes }) => {
  const options = useOptionsFromRoll()
  const [, takeTurn] = useTurn()
  const onSelect = useCallback(
    (_, rollIdx: number) => {
      takeTurn(move(rollIdx, boardIdx, DEFAULT_ATTRIBUTES))
      onClose()
    },
    [onClose, takeTurn],
  )

  const footer = useMemo(() => toFooter(SelectFrom.roll, toggleRoutes), [toggleRoutes])

  return (
    <Prompt
      title="Select a route"
      options={options}
      onClose={onClose}
      onSelect={onSelect}
      renderFooter={footer}
    />
  )
}

export default SelectFromRoll
