import { Matrix, matrix_map } from './matrix'

let matrix2d: Matrix<number> = [
  [5, 9, -1],
  [100, 2],
  [-10, -8, 56],
]

let matrix3d: Matrix<number> = [
  [
    [5, 9, -1],
    [100, 2],
    [-10, -8, 56],
  ],
  [[], [], []],
  [],
  [
    [50, 90, -100],
    [-90, 200],
    [-150, -8, 569],
  ],
]

function flooratzero(e: number): number {
  if (e < 0) return 0
  else return e
}

console.log(matrix_map<number>(matrix2d, flooratzero))
console.log(matrix_map<number>(matrix3d, flooratzero))
