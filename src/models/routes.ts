export type NormalRoute =
  | 'CurvedHighway'
  | 'StraightHighway'
  | 'TJunctionHighway'
  | 'CurvedRailway'
  | 'StraightRailway'
  | 'TJunctionRailway'

export type JunctionRoute = 'Overpass' | 'StraightStation' | 'CurvedStation'

export const NORMAL_ROUTES: NormalRoute[] = [
  'CurvedHighway',
  'StraightHighway',
  'TJunctionHighway',
  'CurvedRailway',
  'StraightRailway',
  'TJunctionRailway',
]

export const JUNCTION_ROUTES: JunctionRoute[] = [
  'Overpass',
  'StraightStation',
  'CurvedStation',
]

export const EMPTY = 'Empty'
export type Empty = typeof EMPTY

type Route = NormalRoute | JunctionRoute
export default Route
