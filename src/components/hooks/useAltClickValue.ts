import { useAltClickValue } from '~/components/contexts/alt-click-value'
import { PendingResult } from '~/models/result'

export default useAltClickValue as () => [PendingResult<number>, () => void]
