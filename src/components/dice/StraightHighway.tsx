import type { FC, SVGProps } from 'react'

const StraighHighway: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 207 205" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Straight Highway</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M1.5.5h204v204H1.5z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M14.417 102.5h19.166" />
        <path strokeWidth={2} d="M1.413 86.5h204.174M1.413 118.5h204.174" />
        <path d="M47.417 102.5h19.166M79.417 102.5h19.166M111.417 102.5h19.166M141.417 102.5h19.166M171.417 102.5h19.166" />
      </g>
    </g>
  </svg>
)

export default StraighHighway
