import type { FC, SVGProps } from 'react'

const CurvedRailway: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 207 206" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Curved Railway</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M.5.5h204v204H.5z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M180 92.917v19.166M128 92.917v19.166M154 92.917v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M112.583 179.5H93.417M112.583 127.5H93.417M112.583 153.5H93.417" />
      </g>
      <path
        d="M206 102.5l-92.5-1c-6.667-.389-10 3.139-10 10.583V206"
        stroke="#000"
        strokeWidth={2}
      />
      <path stroke="#000" strokeLinecap="square" d="M99.724 97.224l13.552 13.552" />
    </g>
  </svg>
)

export default CurvedRailway
