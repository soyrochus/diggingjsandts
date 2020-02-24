type matrix2d = Array<Array<number>>
type cellop = (_: number) => number
let mapMatrix = (matrix: matrix2d, operation: cellop) => {
    let submatrix = (matrix: Array<number>) => {
        return matrix.map(operation)
    }
    return matrix.map(submatrix)
}

let data = [
    [5, 9, -1],
    [100, 2],
    [-10, -8, 56],
]
let floorzero: cellop = e => {
    if (e < 0) return 0
    else return e
}
console.log(mapMatrix(data, floorzero)) // -> [ [ 5, 9, 0 ], [ 100, 2 ], [ 0, 0, 56 ] ]
