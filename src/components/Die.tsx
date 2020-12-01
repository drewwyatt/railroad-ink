import { Box, Button } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import Route from '~/models/routes'
import * as Dice from './dice'

type Props = {
  face?: Route
  onClick?(): void
}

const Die: FC<Props> = ({ face, onClick }) => {
  const Face = useMemo(() => (face ? Dice[face] : () => null), [face])
  return (
    <Box
      as={onClick ? 'button' : undefined}
      border="1px solid #000"
      borderRadius="5%"
      onClick={onClick}
    >
      <Face />
    </Box>
  )
}

export default Die
