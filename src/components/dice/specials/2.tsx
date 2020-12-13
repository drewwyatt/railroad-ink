import type { FC, SVGProps } from 'react'

const SpecialRoute: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 205 205" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Special 2</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M.5.5h204v204H.5z" />
      <g stroke="#000" strokeLinecap="square">
        <path d="M13.417 102.5h19.166M46.417 102.5h19.166M78.417 102.5h19.166M110.417 102.5h19.166M140.417 102.5h19.166M170.417 102.5h19.166" />
      </g>
      <g stroke="#000" strokeLinecap="square">
        <path d="M102.5 114.417v19.166M102.5 144.417v19.166M102.5 174.417v19.166M102.5 12.417v19.166M102.5 42.417v19.166M102.5 72.417v19.166" />
      </g>
      <path
        d="M.413 118.5h78.004c5.722-.167 8.416 3.528 8.083 11.083-.333 7.556-.333 32.557 0 75.004M204.528 118.5h-78.004c-5.722-.167-8.417 3.528-8.083 11.083.333 7.556.333 32.557 0 75.004M204.528 87.581h-78.004c-5.722.167-8.417-3.527-8.083-11.083.333-7.556.333-32.557 0-75.003M.413 87.581h78.004c5.722.167 8.416-3.527 8.083-11.083-.333-7.556-.333-32.557 0-75.003"
        stroke="#000"
        strokeWidth={2}
      />
    </g>
  </svg>
)

export default SpecialRoute
