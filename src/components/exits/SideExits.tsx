import { Box, BoxProps, Grid, GridProps, Spacer } from '@chakra-ui/react'
import { FC } from 'react'
import { WIDTH } from '~/models/board'
import RailExit from './RailExit'
import RoadExit from './RoadExit'

const Container: FC<BoxProps> = ({ children }) => (
  <Box position="relative" transform="rotate(90deg)">
    {children}
  </Box>
)

const Exits: FC<GridProps> = props => (
  <Grid
    {...props}
    height="100%"
    width="15px"
    templateRows={`repeat(${WIDTH}, 1fr)`}
    overflow="hidden"
    pointerEvents="none"
    userSelect="none"
  >
    <Spacer />
    <Container>
      <RailExit />
    </Container>
    <Spacer />
    <Container>
      <RoadExit />
    </Container>
    <Spacer />
    <Container>
      <RailExit />
    </Container>
    <Spacer />
  </Grid>
)

export default Exits
