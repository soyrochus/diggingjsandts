import {take} from "./utils"

function fibonacci_iterable(){

    return {
        n1: 0,
        n2: 1,
        [Symbol.iterator](){ 
            return this
        },
        next(): {value: number, done: boolean} {
            let res = this.n1
            this.n1 = this.n2
            this.n2 = res + this.n1 //fibonaci
            return {value: res, done: false}
        }
    }
}
let i = 0
// the take utility function in the examples ("utils.ts") take the first n elements of any iterable
console.log(take(fibonacci_iterable(), 21)) // _> [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]


for(const e of fibonacci_iterable()){
    console.log(e)
    i++
    if (i > 20)
        break;
}
 // -> printa on each linw 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765

