import type { FC, SVGProps } from 'react'

const StraightStation: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 207 206" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Straight Station</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M206.5.5H2.5v204h204z" />
      <path fill="#000" d="M121 86H88v33h33z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M104.5 123.417v19.166" />
        <path strokeWidth={2} d="M89 119v86M120 119v86" />
        <path d="M104.5 156.417v19.166M104.5 188.417V204.5" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M118 103l-116.5-.5" />
        <path d="M20 92.917v19.166M72 92.917v19.166M46 92.917v19.166" />
      </g>
    </g>
  </svg>
)

export default StraightStation
