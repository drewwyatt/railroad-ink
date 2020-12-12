export type NormalFace =
  | 'CurvedHighway'
  | 'StraightHighway'
  | 'TJunctionHighway'
  | 'CurvedRailway'
  | 'StraightRailway'
  | 'TJunctionRailway'

export type JunctionFace = 'Overpass' | 'StraightStation' | 'CurvedStation'

export const NORMAL_FACES: NormalFace[] = [
  'CurvedHighway',
  'StraightHighway',
  'TJunctionHighway',
  'CurvedRailway',
  'StraightRailway',
  'TJunctionRailway',
]

export const JUNCTION_FACES: JunctionFace[] = [
  'Overpass',
  'StraightStation',
  'CurvedStation',
]

export const EMPTY_FACE = 'Empty'
export type EmptyFace = typeof EMPTY_FACE

type Rotation = 0 | 90 | 180 | 270
export type Attributes = {
  rotation: Rotation
  mirrored: boolean
}

export type Adjustment = 'rotate:right' | 'rotate:left' | 'mirror'
export const DEFAULT_ATTRIBUTES: Attributes = { rotation: 0, mirrored: false }
export const applyAdjustment = (
  adjustment: Adjustment,
  { rotation, mirrored }: Attributes,
): Attributes => {
  switch (adjustment) {
    case 'mirror':
      return {
        mirrored: !mirrored,
        rotation,
      }
    case 'rotate:left': {
      const newRotation = rotation - 90
      return {
        mirrored,
        rotation: newRotation >= 0 ? (newRotation as Rotation) : (270 as Rotation),
      }
    }
    case 'rotate:right':
      return {
        mirrored,
        rotation: ((rotation + 90) % 360) as Rotation,
      }
  }
}

export type DieFace = NormalFace | JunctionFace | EmptyFace
export type Route<T extends DieFace = DieFace> = [face: T, attributes: Attributes]

const route = (face: DieFace, attributes: Attributes = DEFAULT_ATTRIBUTES) =>
  [face, attributes] as Route

export const EMPTY = route('Empty')

export default route
