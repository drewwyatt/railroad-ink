import { Container, Flex, Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import Board from '~/components/Board'
import RouteSelect from '~/components/RouteSelect'

const Page: FC = () => (
  <Container>
    <Flex direction="column">
      <Heading size="md">Railroad Ink</Heading>
      <RouteSelect />
      <Board />
    </Flex>
  </Container>
)
export default Page
