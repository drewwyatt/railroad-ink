import { FC, useMemo } from 'react'
import type { DieFace } from '~/models/routes'
import Die, { Rolled } from '../Die'

type CompatibleFaceOrTuple = DieFace | [DieFace, boolean] | readonly [DieFace, boolean]

type PlainProps = {
  face?: DieFace
  onClick(): void
}

const PlainOption: FC<PlainProps> = ({ face, onClick, ...props }) => (
  <Die {...props} face={face} onClick={onClick} />
)

interface AllocatableProps extends PlainProps {
  allocated: boolean
}

const AllocatableOption: FC<AllocatableProps> = ({
  face,
  allocated,
  onClick,
  ...props
}) => (
  <Rolled allocated={allocated}>
    <Die {...props} face={face} onClick={onClick} />
  </Rolled>
)

type Props = {
  for: CompatibleFaceOrTuple
  index: number
  onClick(face: DieFace, index: number): void
}

const Option: FC<Props> = ({ for: faceOrTuple, index, onClick, ...props }) =>
  useMemo(
    () =>
      isTuple(faceOrTuple) ? (
        <AllocatableOption
          {...props}
          face={faceOrTuple[0]}
          allocated={faceOrTuple[1]}
          onClick={() => onClick(faceOrTuple[0], index)}
        />
      ) : (
        <PlainOption
          {...props}
          face={faceOrTuple as DieFace}
          onClick={() => onClick(faceOrTuple as DieFace, index)}
        />
      ),
    [faceOrTuple, index, onClick],
  )

const isTuple = (faceOrTuple: CompatibleFaceOrTuple): faceOrTuple is [DieFace, boolean] =>
  Array.isArray(faceOrTuple)

export default Option
