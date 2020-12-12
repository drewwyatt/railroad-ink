import {
  AspectRatio,
  Button,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  VStack,
} from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import { BsArrowClockwise, BsArrowCounterclockwise } from 'react-icons/bs'
import { GoMirror } from 'react-icons/go'
import { Adjustment } from '~/models/routes'

type Props = {
  isOpen: boolean
  onClose(): void
  onSelect(selection: Adjustment): void
}

const AttributeSelect: FC<Props> = ({ children, isOpen, onClose, onSelect }) => {
  const toOnClick = useCallback((selection: Adjustment) => () => onSelect(selection), [
    onSelect,
  ])

  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <AspectRatio ratio={1}>{children}</AspectRatio>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton onClick={onClose} />
        <PopoverHeader>Rotate or Mirror</PopoverHeader>
        <PopoverBody>
          <VStack>
            <HStack
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              width="100%"
            >
              <IconButton
                aria-label="rotate left"
                icon={<BsArrowCounterclockwise />}
                onClick={toOnClick('rotate:left')}
              />
              <IconButton
                aria-label="rotate right"
                icon={<BsArrowClockwise />}
                onClick={toOnClick('rotate:right')}
              />
              <IconButton
                aria-label="mirror"
                icon={<GoMirror />}
                onClick={toOnClick('mirror')}
              />
            </HStack>
            <Spacer />
            <Button variant="ghost" onClick={onClose}>
              Done
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default AttributeSelect
