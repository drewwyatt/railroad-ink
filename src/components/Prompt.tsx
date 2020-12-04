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
import Route, { NormalRoute, JunctionRoute } from '~/models/routes'
import Die from './Die'

type Props<T extends Route[]> = {
  options: T
  title?: string
  isOpen?: boolean

  onClose(): void
  onSelect: T extends NormalRoute[]
    ? (route: NormalRoute, idx: number) => void
    : T extends JunctionRoute[]
    ? (route: JunctionRoute, idx: number) => void
    : (route: Route, idx: number) => void
}

const Options: FC<{ from: Route[]; onSelect: (r: Route, idx: number) => void }> = ({
  from: options,
  onSelect,
}) => (
  <Grid templateColumns={`repeat(${options.length}, 1fr)`} gap="2">
    {options.map((key, idx) => (
      <Die key={key} face={key} onClick={() => onSelect(key, idx)} />
    ))}
  </Grid>
)

const Prompt = <T extends Route[]>({
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
