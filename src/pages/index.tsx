import { Container, Flex, Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import Board from '~/components/Board'
import NextTurn from '~/components/NextTurn'
import RollSelect from '~/components/RollSelect'
import SpecialSelect from '~/components/SpecialSelect'

const Page: FC = () => (
  <Container>
    <Flex direction="column">
      <Heading size="md">Railroad Ink</Heading>
      <RollSelect />
      <SpecialSelect />
      <Board />
      <NextTurn />
    </Flex>
  </Container>
)
export default Page
