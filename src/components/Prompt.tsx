import {
  Button,
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
import * as Dice from './dice'

type Props<T extends NormalRoute[] | JunctionRoute[]> = {
  options: T
  title?: string

  onClose(): void
  onSelect: T extends NormalRoute[]
    ? (route: NormalRoute) => void
    : (route: JunctionRoute) => void
}

const Options: FC<{ from: Route[] }> = ({ from: options }) => (
  <ul>
    {options.map(key => {
      const Die = Dice[key]
      return (
        <li key={key}>
          <Die width="100px" />
        </li>
      )
    })}
  </ul>
)

const Prompt = <T extends NormalRoute[] | JunctionRoute[]>({
  title,
  options,
  onClose,
}: Props<T>) => {
  return (
    <Modal isOpen onClose={() => console.log('onClose')}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Options from={options} />
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
