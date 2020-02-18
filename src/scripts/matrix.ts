
type Matrix<T> = Array<T> | Array<Matrix<T>>                
type celloperation<T> = (_: T) => T

function matrix_map<T>(matrix: Matrix<T>, operation: celloperation<T>) : Matrix<T> {
         
    if(matrix.length > 0){
        
        if(Array.isArray(matrix[0])){
            let new_matrix = []
            for(const e of matrix){
                new_matrix.push(matrix_map(e as Matrix<T>, operation))
            }
            return new_matrix
        } else {
         
            return (matrix as Array<T>).map(operation) 
        }
    }else {
        return matrix
    }
}

let matrix2d: Matrix<number> = [[5, 9, -1], [100, 2], [-10, -8, 56]]

let matrix3d: Matrix<number> = [[[5, 9, -1], [100, 2], [-10, -8, 56]],
                                [[],[],[]],
                                [],
                                [[50, 90, -100], [-90, 200], [-150, -8, 569]]]

function flooratzero(e: number) :  number {
   if (e < 0)
       return 0
   else
       return e
}

console.log(matrix_map<number>(matrix2d, flooratzero))
console.log(matrix_map<number>(matrix3d, flooratzero))
