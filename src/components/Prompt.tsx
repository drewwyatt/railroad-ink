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
import Die from './Die'

type Props<T extends DieFace[]> = {
  options: T
  title?: string
  isOpen?: boolean

  onClose(): void
  onSelect: T extends NormalFace[]
    ? (route: NormalFace, idx: number) => void
    : T extends JunctionFace[]
    ? (route: JunctionFace, idx: number) => void
    : (route: DieFace, idx: number) => void
}

const Options: FC<{ from: DieFace[]; onSelect: (r: DieFace, idx: number) => void }> = ({
  from: options,
  onSelect,
}) => (
  <Grid templateColumns={`repeat(${options.length}, 1fr)`} gap="2">
    {options.map((key, idx) => (
      <Die key={[key, idx].join('-')} face={key} onClick={() => onSelect(key, idx)} />
    ))}
  </Grid>
)

const Prompt = <T extends DieFace[]>({
  title,
  options,
  isOpen,
  onClose,
  onSelect,
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
          <Button variant="ghost" onClick={onClose}>
            Nevermind
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Prompt
