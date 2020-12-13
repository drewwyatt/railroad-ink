import { Box } from '@chakra-ui/react'
import { is } from 'ramda'
import { FC, MouseEvent, useMemo } from 'react'
import type { Attributes, DieFace } from '~/models/routes'
import * as Dice from './dice'

type Props = {
  face?: DieFace
  onClick?(event: MouseEvent): void
  rotation?: Attributes['rotation']
  mirrored?: Attributes['mirrored']
}

const Die: FC<Props> = ({ face, onClick, rotation = 0, mirrored, ...props }) => {
  const Face = useMemo(() => (face ? Dice[face] : Dice.Empty), [face])
  const transform = useMemo(
    () =>
      [rotation > 0 ? `rotate(${rotation}deg)` : null, mirrored ? 'scale(1, -1)' : null]
        .filter(is(String))
        .join(' '),
    [rotation, mirrored],
  )
  return (
    <Box
      as={onClick ? 'button' : undefined}
      border="1px solid #000"
      borderRadius="5%"
      onClick={onClick}
      transform={transform}
      {...props}
    >
      <Face {...props} height="100%" width="100%" />
    </Box>
  )
}

export default Die
