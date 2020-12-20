import { useSpecials } from '~/components/contexts/specials'
import { SpecialFace } from '~/models/routes'

const useAvailableSpecials = (): [
  selected: SpecialFace | undefined,
  avilable: Set<SpecialFace>,
] => {
  const [specials] = useSpecials()
  return [specials.selection?.face, specials.available]
}
export default useAvailableSpecials
