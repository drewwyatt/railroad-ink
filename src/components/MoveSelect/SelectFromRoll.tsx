import { HStack, IconButton } from '@chakra-ui/react'
import { FC, useCallback, useMemo } from 'react'
import { BsArrowClockwise, BsArrowCounterclockwise } from 'react-icons/bs'
import { GoMirror } from 'react-icons/go'
import useTurn, { move } from '../hooks/useTurn'
import Prompt from '../Prompt'
import { useAdjustments, useOptionsFromRoll } from './hooks'
import { SelectFrom } from './models'
import { toFooter } from './utils'

type Props = {
  boardIdx: number

  onClose(): void
  toggleRoutes(): void
}

const SelectFromRoll: FC<Props> = ({ boardIdx, onClose, toggleRoutes }) => {
  const options = useOptionsFromRoll()
  const [attributes, adjust] = useAdjustments()

  const [, takeTurn] = useTurn()
  const onSelect = useCallback(
    (_, rollIdx: number) => {
      takeTurn(move(rollIdx, boardIdx, attributes))
      onClose()
    },
    [onClose, takeTurn, attributes],
  )

  const footer = useMemo(() => toFooter(SelectFrom.roll, toggleRoutes), [toggleRoutes])

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

export default SelectFromRoll
