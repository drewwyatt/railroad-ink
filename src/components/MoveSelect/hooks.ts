import { zip } from 'ramda'
import { useMemo } from 'react'
import { isOK, unwrapOr } from '~/models/result'
import { DieFace, EMPTY_FACE } from '~/models/routes'
import { useAvailableSpecials, useRoll, useTurn } from '../hooks'

export type Options = [DieFace, boolean][]

export const useOptionsFromRoll = (): Options => {
  const [turn] = useTurn()
  const [roll] = useRoll()

  return useMemo(
    () => zip(roll, turn).map(([r, t]) => [unwrapOr(EMPTY_FACE, r), isOK(t)]),
    [roll, turn],
  )
}

export const useOptionsFromSpecials = () => {
  const [selected, available] = useAvailableSpecials()

  return useMemo(
    () =>
      [selected, [...available].map(face => [face, face === selected] as const)] as const,
    [selected, available],
  )
}
