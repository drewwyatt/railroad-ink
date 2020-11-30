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
import { NormalRoute, JunctionRoute } from '~/models/routes'
import * as Dice from './dice'

type Props<T extends NormalRoute[] | JunctionRoute[]> = {
  options: T
  title?: string

  onClose(): void
  onSelect: T extends NormalRoute[]
    ? (route: NormalRoute) => void
    : (route: JunctionRoute) => void
}

const Options: FC<{ from: NormalRoute[] | JunctionRoute[] }> = ({ from: options }) => {
  const isNormal = options[0] in Dice.Normal
  return (
    <ul>
      {(options as string[]).map(key => {
        const Die = isNormal ? Dice.Normal[key] : Dice.Junction[key]
        return (
          <li key={key}>
            <Die width="100px" />
          </li>
        )
      })}
    </ul>
  )
}

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
