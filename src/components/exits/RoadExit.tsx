import { Box } from '@chakra-ui/react'
import type { FC, SVGProps } from 'react'

const SVG: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 35 63" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{'Straight Highway'}</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M-67.5-100.5h204v204h-204z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M18 7.708v9.584" />
        <path strokeWidth={2} d="M33.5 1.21L33 61M2.5 1.21L2 61" />
        <path d="M18 24.708v9.584M18 40.708v9.584" />
      </g>
    </g>
  </svg>
)

const Exit: FC = () => (
  <Box
    width="20%"
    left="50%"
    transform="translate(-50%, -50%)"
    top="10px"
    position="absolute"
  >
    <SVG height="50%" />
  </Box>
)

export default Exit
