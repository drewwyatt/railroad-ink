import type { FC, SVGProps } from 'react'

const Empty: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 205 205" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Empty</title>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#000" fill="#000" cx={102.5} cy={102.5} r={2} />
    </g>
  </svg>
)

export default Empty
