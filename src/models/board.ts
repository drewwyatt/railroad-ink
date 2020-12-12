import { repeat } from 'ramda'
import { EMPTY, Route } from './routes'

type Board = Route[]

export const WIDTH = 7
export const HEIGHT = 7
export const DEfAULT_VALUE: Board = repeat(EMPTY, WIDTH * HEIGHT)

export default Board
