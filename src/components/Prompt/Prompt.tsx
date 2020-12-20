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
} from '@chakra-ui/react'
import type { FC } from 'react'
import type { DieFace, NormalFace, JunctionFace } from '~/models/routes'
import Option from './Option'

type AllocatableDieFace = [DieFace, boolean] | readonly [DieFace, boolean]
type MaybeAllocatable<T extends DieFace> = T | [T, boolean] | readonly [T, boolean]

type Props<T extends (DieFace | AllocatableDieFace)[]> = {
  options: T
  title?: string
  isOpen?: boolean

  onClose(): void
  onSelect: T extends MaybeAllocatable<NormalFace>[]
    ? (route: NormalFace, idx: number) => void
    : T extends MaybeAllocatable<JunctionFace>[]
    ? (route: JunctionFace, idx: number) => void
    : (route: DieFace, idx: number) => void

  renderFooter?(): React.ReactNode
}

const Options: FC<{
  from: MaybeAllocatable<DieFace>[]
  onSelect: (r: DieFace, idx: number) => void
}> = ({ from: options, onSelect }) => (
  <Grid templateColumns={`repeat(${options.length}, 1fr)`} gap="2">
    {options.map((option, idx) => (
      <Option key={idx} for={option} index={idx} onClick={onSelect} />
    ))}
  </Grid>
)

const Prompt = <T extends (DieFace | AllocatableDieFace)[]>({
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
          <Options from={options} onSelect={onSelect} />
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
