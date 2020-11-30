export type NormalRoute =
  | 'CurvedHighway'
  | 'StraightHighway'
  | 'TJunctionHighway'
  | 'CurvedRailway'
  | 'StraightRailway'
  | 'TJunctionRailway'

export type JunctionRoute = 'Overpass' | 'StraightStation' | 'CurvedStation'

type Route = NormalRoute | JunctionRoute
export default Route
