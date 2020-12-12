import { Container, Flex, Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import Board from '~/components/Board'
import RollSelect from '~/components/RollSelect'
import NextTurn from '~/components/NextTurn'

const Page: FC = () => (
  <Container>
    <Flex direction="column">
      <Heading size="md">Railroad Ink</Heading>
      <RollSelect />
      <Board />
      <NextTurn />
    </Flex>
  </Container>
)
export default Page
