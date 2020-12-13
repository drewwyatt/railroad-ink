import type { FC, SVGProps } from 'react'

const SpecialRoute: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 236 217" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Special 5</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M29.5.5h204v204h-204z" />
      <path fill="#000" d="M115 86h33v33h-33z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M132.5 15.417v19.166" />
        <path strokeWidth={2} d="M148.5 2.413L148 120M116.5 2.413L116 120" />
        <path d="M132.5 48.417v19.166M132.5 80.417v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M1 103l116.5-.5" />
        <path d="M99 92.917v19.166M47 92.917v19.166M73 92.917v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M118 103l116.5-.5" />
        <path d="M216 92.917v19.166M164 92.917v19.166M190 92.917v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M132.5 110.417v19.166" />
        <path strokeWidth={2} d="M148.5 97.413L148 215M116.5 97.413L116 215" />
        <path d="M132.5 143.417v19.166M132.5 175.417v19.166" />
      </g>
    </g>
  </svg>
)

export default SpecialRoute
