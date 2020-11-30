import type { FC, SVGProps } from 'react'

const CurvedHighway: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 205 207" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Curved Highway</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M.5.5h204v204H.5z" />
      <g stroke="#000">
        <g strokeLinecap="square">
          <path d="M110.417 102.5h19.166M140.417 102.5h19.166M170.417 102.5h19.166" />
        </g>
        <g strokeLinecap="square">
          <path d="M103 110.917v19.166M103 140.917v19.166M103 170.917v19.166" />
        </g>
        <path
          d="M205 118.5h-75.417c-6.389.5-9.583 4.361-9.583 11.583v75.004"
          strokeWidth={2}
        />
        <path
          d="M205 86.5H100.304C91.434 87 87 90.861 87 98.083v75.004L88 206"
          strokeWidth={2}
        />
      </g>
    </g>
  </svg>
)

export default CurvedHighway
