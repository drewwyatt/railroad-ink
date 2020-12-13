import type { FC, SVGProps } from 'react'

const SpecialRoute: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 208 209" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Special 4</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M1.5.5h204v204H1.5z" />
      <path fill="#000" d="M87 86h33v33H87z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M104.5 14.417v19.166" />
        <path strokeWidth={2} d="M120.5 1.413L120 119M88.5 1.413L88 119" />
        <path d="M104.5 47.417v19.166M104.5 79.417v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M103 91l.5 116.5" />
        <path d="M113.083 189H93.917M113.083 137H93.917M113.083 163H93.917" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M14.417 102.5h19.166" />
        <path strokeWidth={2} d="M1.413 86.5L119 87M1.413 118.5L119 119" />
        <path d="M47.417 102.5h19.166M79.417 102.5h19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M90 103l116.5-.5" />
        <path d="M188 92.917v19.166M136 92.917v19.166M162 92.917v19.166" />
      </g>
    </g>
  </svg>
)

export default SpecialRoute
