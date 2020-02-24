let toPower = exponent => {
    return base => base ** exponent
}

let square = toPower(2)
let cube = toPower(3)

console.log(square(3)) // -> 9
console.log(cube(3)) // -> 27

let counter = (step, init = 0) => {
    let state = init
    return () => {
        state += step
        return state
    }
}
let one = counter(1)
let pair = counter(2)
let triple = counter(3)
let cuad = counter(4)

console.log(one()) // -> 1
console.log(one()) // -> 2
console.log(one()) // -> 3
console.log(cuad()) // -> 4
console.log(cuad()) // -> 8
console.log(cuad()) // -> 12
