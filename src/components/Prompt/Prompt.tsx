import {
  Button,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
} from '@chakra-ui/react'
import type { FC } from 'react'
import {
  DieFace,
  NormalFace,
  JunctionFace,
  Attributes,
  DEFAULT_ATTRIBUTES,
} from '~/models/routes'
import Option from './Option'

type AllocatableDieFace = [DieFace, boolean] | readonly [DieFace, boolean]
type MaybeAllocatable<T extends DieFace> = T | [T, boolean] | readonly [T, boolean]

type Props<T extends (DieFace | AllocatableDieFace)[]> = {
  children?: React.ReactNode
  options: T
  title?: string
  isOpen?: boolean
  attributes?: Attributes

  onClose(): void
  onSelect: T extends MaybeAllocatable<NormalFace>[]
    ? (route: NormalFace, idx: number) => void
    : T extends MaybeAllocatable<JunctionFace>[]
    ? (route: JunctionFace, idx: number) => void
    : (route: DieFace, idx: number) => void

  renderFooter?(): React.ReactNode
}

const Options: FC<{
  attributes: Attributes
  from: MaybeAllocatable<DieFace>[]
  onSelect: (r: DieFace, idx: number) => void
}> = ({ attributes, from: options, onSelect }) => (
  <Grid width="100%" templateColumns={`repeat(${options.length}, 1fr)`} gap="2">
    {options.map((option, idx) => (
      <Option {...attributes} key={idx} for={option} index={idx} onClick={onSelect} />
    ))}
  </Grid>
)

const Prompt = <T extends (DieFace | AllocatableDieFace)[]>({
  attributes = DEFAULT_ATTRIBUTES,
  children,
  title,
  options,
  isOpen,
  onClose,
  onSelect,
  renderFooter,
}: Props<T>) => {
  return (
    <Modal isOpen={typeof isOpen === 'boolean' ? isOpen : true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack width="100%" height="100%">
            <HStack width="100%">
              <Options attributes={attributes} from={options} onSelect={onSelect} />
            </HStack>
            {children}
          </VStack>
        </ModalBody>

        <ModalFooter>
          {renderFooter ? (
            renderFooter()
          ) : (
            <Button variant="ghost" onClick={onClose}>
              Nevermind
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Prompt
