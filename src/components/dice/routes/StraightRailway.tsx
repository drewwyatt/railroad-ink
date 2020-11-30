import type { FC, SVGProps } from 'react'

const StraighRailway: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 208 205" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Straight Railway</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M1.5.5h204v204H1.5z" />
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M1.5 102.5h205" />
        <path d="M25 92.917v19.166M103 92.917v19.166M51 92.917v19.166M181 92.917v19.166M129 92.917v19.166M77 92.917v19.166M155 92.917v19.166" />
      </g>
    </g>
  </svg>
)

export default StraighRailway
