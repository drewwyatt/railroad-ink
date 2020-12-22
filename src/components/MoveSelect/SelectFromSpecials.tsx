/* eslint-disable react/display-name */
import { HStack, IconButton } from '@chakra-ui/react'
import { FC, useCallback, useMemo } from 'react'
import { BsArrowClockwise, BsArrowCounterclockwise } from 'react-icons/bs'
import { GoMirror } from 'react-icons/go'
import { useSpecialSelect } from '~/components/hooks'
import { SpecialFace } from '~/models/routes'
import Prompt from '../Prompt'
import { useOptionsFromSpecials, useAdjustments } from './hooks'
import { SelectFrom } from './models'
import { toFooter } from './utils'

type Props = {
  boardIdx: number

  onClose(): void
  toggleRoutes(): void
}

const SelectFromSpecials: FC<Props> = ({ boardIdx, onClose, toggleRoutes }) => {
  const [selected, options] = useOptionsFromSpecials()
  const [attributes, adjust] = useAdjustments()

  const [select, clear] = useSpecialSelect()
  const onSelect = useCallback(
    (dieFace: SpecialFace) => {
      select(dieFace, boardIdx, attributes)
      onClose()
      toggleRoutes() // set back to rolled routes
    },
    [boardIdx, onClose, select, attributes, toggleRoutes],
  )

  const footer = useMemo(
    () => toFooter(SelectFrom.specials, toggleRoutes, selected ? clear : undefined),
    [toggleRoutes, selected, clear],
  )

  return (
    <Prompt
      attributes={attributes}
      title="Select a route"
      options={options}
      onClose={onClose}
      onSelect={onSelect}
      renderFooter={footer}
    >
      <HStack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        width="100%"
      >
        <IconButton
          aria-label="rotate left"
          icon={<BsArrowCounterclockwise />}
          onClick={() => adjust('rotate:left')}
        />
        <IconButton
          aria-label="rotate right"
          icon={<BsArrowClockwise />}
          onClick={() => adjust('rotate:right')}
        />
        <IconButton
          aria-label="mirror"
          icon={<GoMirror />}
          onClick={() => adjust('mirror')}
        />
      </HStack>
    </Prompt>
  )
}

export default SelectFromSpecials
