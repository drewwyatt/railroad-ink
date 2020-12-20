import { Box, Grid, Spacer } from '@chakra-ui/react'
import { FC } from 'react'
import { WIDTH } from '~/models/board'
import RoadExit from './RoadExit'

const Container: FC = ({ children }) => <Box position="relative">{children}</Box>

const Exits: FC = () => (
  <>
    <Spacer />
    <Grid height="20px" templateColumns={`repeat(${WIDTH}, 1fr)`}>
      <Spacer />
      <Container>
        <RoadExit />
      </Container>
      <Spacer />
      <Container>
        <RoadExit />
      </Container>
      <Spacer />
      <Container>
        <RoadExit />
      </Container>
      <Spacer />
    </Grid>
    <Spacer />
  </>
)

export default Exits
