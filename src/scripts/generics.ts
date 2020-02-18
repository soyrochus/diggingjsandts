type Matrix2DG<T> = Array<Array<T>>
type cellopG<T> = (_: T) => T
function mapMatrixG<T>(matrix: Matrix2DG<T> , operation: cellopG<T>) {
  
   let submatrix = (matrix : Array<T>)=>{
       return matrix.map(operation)
   }
   return matrix.map(submatrix)
}

let examplenumber = [[5, 9, -1], [100, 2], [-10, -8, 56]]
let examplebigint = [[5n, 9n, -1n], [100n, 2n], [-10n, -8n, 56n]]

let floor_zero_number : cellopG<number> = (e) => (e<0) ? 0 : e
let floor_zero_numbigint : cellopG<number | bigint> = (e) => (e<0) ? 0 : e


console.log(mapMatrixG(examplenumber, floor_zero_number)) // -> [ [ 5, 9, 0 ], [ 100, 2 ], [ 0, 0, 56 ] ]

// compile error TS2345: Argument of type 'cellopG<number>' is not assignable to parameter of type 'cellopG<bigint>'.
//console.log(mapMatrixG(examplebigint, floor_zero_number)) 

// This works 
console.log(mapMatrixG(examplebigint, floor_zero_numbigint)) // -> [ [ 5n, 9n, 0 ], [ 100n, 2n ], [ 0, 0, 56n ] ]
