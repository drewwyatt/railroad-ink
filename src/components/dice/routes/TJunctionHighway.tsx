import type { FC, SVGProps } from 'react'

const TJunctionHighway: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 207 205" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>T-Junction Highway</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M1.5.5h204v204H1.5z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M14.417 102.5h19.166" />
        <path strokeWidth={2} d="M1.413 86.5h204.174" />
        <path d="M47.417 102.5h19.166M79.417 102.5h19.166M111.417 102.5h19.166M141.417 102.5h19.166M171.417 102.5h19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M103.5 114.417v19.166M103.5 144.417v19.166M103.5 174.417v19.166" />
      </g>
      <path
        d="M1.413 118.5h78.004c5.722-.167 8.416 3.528 8.083 11.083-.333 7.556-.333 32.557 0 75.004M205.528 118.5h-78.004c-5.722-.167-8.417 3.528-8.083 11.083.333 7.556.333 32.557 0 75.004"
        stroke="#000"
        strokeWidth={2}
      />
    </g>
  </svg>
)
export default TJunctionHighway
