import { Box, Grid } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { SPECIAL_FACES } from '~/models/routes'
import { useSpecials } from './contexts/specials'
import Die, { Rolled } from './Die'

const RouteSelect: FC = () => {
  const [{ available, selection }] = useSpecials()

  return useMemo(
    () => (
      <Box as="fieldset" marginBottom="20px" userSelect="none">
        <legend>Special Routes (may use up to one per turn)</legend>
        <Grid templateColumns="repeat(6, 1fr)" gap="2">
          {SPECIAL_FACES.map(face => (
            <Rolled
              allocated={face === selection?.face || !available.has(face)}
              key={face}
            >
              <Die face={face} />
            </Rolled>
          ))}
        </Grid>
      </Box>
    ),
    [available, selection],
  )
}

export default RouteSelect
