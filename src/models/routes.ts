import type { Normal, Junction } from '~/components/dice'

export type NormalRoute = keyof typeof Normal
export type JunctionRoute = keyof typeof Junction

type Route = NormalRoute | JunctionRoute
export default Route
