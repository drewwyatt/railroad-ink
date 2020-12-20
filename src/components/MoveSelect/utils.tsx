/* eslint-disable react/display-name */
import { Button } from '@chakra-ui/react'
import { SelectFrom } from './models'

export const toFooter = (
  type: SelectFrom,
  toggle: () => void,
  clear?: () => void,
) => () => (
  <>
    {clear && (
      <Button variant="secondary" onClick={clear}>
        Clear Selection
      </Button>
    )}
    <Button variant="ghost" onClick={toggle}>
      View {type === SelectFrom.roll ? 'Special Routes' : 'Rolled Routes'}
    </Button>
  </>
)
