import type { FC, SVGProps } from 'react'

const SpecialRoute: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 236 210" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Special 1</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M29.5 1.5h204v204h-204z" />
      <path fill="#000" d="M115 87h33v33h-33z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M132.5 14.417v19.166" />
        <path strokeWidth={2} d="M148.5 1.413L148 119M116.5 1.413L116 119" />
        <path d="M132.5 47.417v19.166M132.5 79.417v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M1 104l116.5-.5" />
        <path d="M99 93.917v19.166M47 93.917v19.166M73 93.917v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M118 104l116.5-.5" />
        <path d="M216 93.917v19.166M164 93.917v19.166M190 93.917v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M132 92l.5 116.5" />
        <path d="M142.083 190h-19.166M142.083 138h-19.166M142.083 164h-19.166" />
      </g>
    </g>
  </svg>
)

export default SpecialRoute
