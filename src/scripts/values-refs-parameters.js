let name2 = 'Harry' // variable “name” can be re-assigned but the value “Harry” cannot be changed

let shoppingItem = ['orange', 10, false]
shoppingItem[1] = 500
console.log(shoppingItem) // ->[“orange”, 500, false]

let reset = x => {
    x = null
}
let avar = 100
reset(avar)
console.log(avar) // -> 100

let resetArr = x => {
    x[0] = null
}
let a = [100, 200, 300]
resetArr(a)
console.log(a) // -> [null, 200, 300]
