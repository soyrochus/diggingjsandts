export type Matrix<T> = Array<T> | Array<Matrix<T>>
export interface Celloperation<T> {
  (_: T): T
}

export function matrix_map<T>(matrix: Matrix<T>, operation: Celloperation<T>): Matrix<T> {
  if (matrix.length > 0) {
    if (Array.isArray(matrix[0])) {
      let new_matrix = []
      for (const e of matrix) {
        new_matrix.push(matrix_map(e as Matrix<T>, operation))
      }
      return new_matrix
    } else {
      return (matrix as Array<T>).map(operation)
    }
  } else {
    return matrix
  }
}

export interface IteratorProtocol<T> {
  next: () => T
  done: () => boolean
}
