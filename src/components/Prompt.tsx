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

type Props<T extends NormalRoute[] | JunctionRoute[]> = {
  options: T
  title?: string
  isOpen?: boolean

  onClose(): void
  onSelect: T extends NormalRoute[]
    ? (route: NormalRoute) => void
    : (route: JunctionRoute) => void
}

const Options: FC<{ from: Route[]; onSelect: (r: Route) => void }> = ({
  from: options,
  onSelect,
}) => (
  <Grid templateColumns={`repeat(${options.length}, 1fr)`} gap="2">
    {options.map(key => (
      <Die key={key} face={key} onClick={() => onSelect(key)} />
    ))}
  </Grid>
)

const Prompt = <T extends NormalRoute[] | JunctionRoute[]>({
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
