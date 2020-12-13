import type { FC, SVGProps } from 'react'

const SpecialRoute: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 208 206" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Special 3</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M1.5.5h204v204H1.5z" />
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M1.5 102.5h205" />
        <path d="M25 92.917v19.166M51 92.917v19.166M181 92.917v19.166M129 92.917v19.166M77 92.917v19.166M155 92.917v19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M104 103v102" />
        <path d="M113.583 179.5H94.417M113.583 127.5H94.417M113.583 153.5H94.417" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M110.776 95.724l-13.552 13.552M97.224 95.724l13.552 13.552" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path strokeWidth={2} d="M104 2v102" />
        <path d="M113.583 78.5H94.417M113.583 26.5H94.417M113.583 52.5H94.417" />
      </g>
    </g>
  </svg>
)

export default SpecialRoute
