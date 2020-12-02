import { Box } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import Route, { Empty } from '~/models/routes'
import * as Dice from './dice'

type Props = {
  face?: Route | Empty
  onClick?(): void
}

const Die: FC<Props> = ({ face, onClick }) => {
  const Face = useMemo(() => (face ? Dice[face] : Dice.Empty), [face])
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
