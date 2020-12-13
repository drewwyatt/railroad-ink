import type { FC, SVGProps } from 'react'

const SpecialRoute: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 221 211" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Special 0</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M1.5 2.5h204v204H1.5z" />
      <path fill="#000" d="M87 88h33v33H87z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M104.5 14.417v19.166" />
        <path strokeWidth={2} d="M120.5 1.413L120 119M88.5 1.413L88 119" />
        <path d="M104.5 47.417v19.166M104.5 79.417v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M103 93l.5 116.5" />
        <path d="M113.083 191H93.917M113.083 139H93.917M113.083 165H93.917" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M14.417 104.5h19.166" />
        <path strokeWidth={2} d="M1.413 88.5L119 89M1.413 120.5L119 121" />
        <path d="M47.417 104.5h19.166M79.417 104.5h19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M114.417 104.5h19.166" />
        <path strokeWidth={2} d="M101.413 88.5L219 89M101.413 120.5L219 121" />
        <path d="M147.417 104.5h19.166M179.417 104.5h19.166" />
      </g>
    </g>
  </svg>
)

export default SpecialRoute
