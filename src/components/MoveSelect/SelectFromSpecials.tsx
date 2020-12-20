/* eslint-disable react/display-name */
import { FC, useCallback, useMemo } from 'react'
import { useSpecialSelect } from '~/components/hooks'
import { SpecialFace } from '~/models/routes'
import Prompt from '../Prompt'
import { useOptionsFromSpecials } from './hooks'
import { SelectFrom } from './models'
import { toFooter } from './utils'

type Props = {
  boardIdx: number

  onClose(): void
  toggleRoutes(): void
}

const SelectFromSpecials: FC<Props> = ({ boardIdx, onClose, toggleRoutes }) => {
  const [selected, options] = useOptionsFromSpecials()

  const [select, clear] = useSpecialSelect()
  const onSelect = useCallback(
    (dieFace: SpecialFace) => {
      select(dieFace, boardIdx)
      onClose()
    },
    [boardIdx, onClose, select],
  )

  const footer = useMemo(
    () => toFooter(SelectFrom.specials, toggleRoutes, selected ? clear : undefined),
    [toggleRoutes, selected, clear],
  )

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

export default SelectFromSpecials
