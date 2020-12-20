import { Box } from '@chakra-ui/react'
import type { FC, SVGProps } from 'react'

const SVG: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 15 63" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{'Straight Railway'}</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M-29.5-99.5h204v204h-204z" />
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M8 2l-.5 59.686" />
        <path d="M14 50.5H1M14 17.5H1M14 33.5H1" />
      </g>
    </g>
  </svg>
)

const Exit: FC = () => (
  <Box top="0" right="0" bottom="0" left="0" position="absolute">
    <SVG height="100%" width="100%" />
  </Box>
)

export default Exit
