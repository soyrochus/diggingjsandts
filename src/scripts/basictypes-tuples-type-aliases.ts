// Declare a tuple type
let  seat : [string, number];
// Initialize it
seat = ["hi", 10]; // OK
console.log(seat[0]) // -> 'hi'

// Initialize it incorrectly
// error TS2322: Type 'number' is not assignable to type 'string'.
// error TS2322: Type 'string' is not assignable to type 'number'.
//seat = [10, "hi"]; 

type Seat = [string, number]

let john : Seat = ["John", 15]

let karen : Seat = ["Karen", 15]
let karen2        = ["Karen", 15]

