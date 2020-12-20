import { useCallback } from 'react'
import { useSpecials } from '~/components/contexts/specials'
import * as ac from '~/components/contexts/specials/actions'
import { SpecialFace } from '~/models/routes'

const useSpecialSelect = () => {
  const [, dispatch] = useSpecials()

  const select = useCallback(
    (selected: SpecialFace, boardIdx: number) => {
      dispatch(ac.select(selected, boardIdx))
    },
    [dispatch],
  )

  const clear = useCallback(() => {
    dispatch(ac.clearSelection())
  }, [dispatch])

  return [select, clear] as const
}

export default useSpecialSelect
