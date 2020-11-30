import { Box } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import Route from '~/models/routes'
import * as Dice from './dice'

type Props = {
  face?: Route
}

const Die: FC<Props> = ({ face }) => {
  const Face = useMemo(() => (face ? Dice[face] : () => null), [face])
  return (
    <Box border="1px solid #000" borderRadius="5%">
      <Face />
    </Box>
  )
}

export default Die
