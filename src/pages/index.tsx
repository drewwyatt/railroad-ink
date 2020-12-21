import { Container, Grid, Heading, Spacer } from '@chakra-ui/react'
import type { FC } from 'react'
import Board from '~/components/Board'
import NextTurn from '~/components/NextTurn'
import RollSelect from '~/components/RollSelect'
import SpecialSelect from '~/components/SpecialSelect'

const Page: FC = () => (
  <Container>
    <Grid templateRows="1fr 3fr 3fr auto 1fr 1fr">
      <Heading size="md">Railroad Ink</Heading>
      <RollSelect />
      <SpecialSelect />
      <Board />
      <Spacer />
      <NextTurn />
    </Grid>
  </Container>
)
export default Page
