import { repeat } from 'ramda'
import Route, { Empty, EMPTY } from './routes'

type Board = (Route | Empty)[]

export const WIDTH = 7
export const HEIGHT = 7
export const DEfAULT_VALUE: Board = repeat(EMPTY, WIDTH * HEIGHT)

export default Board
