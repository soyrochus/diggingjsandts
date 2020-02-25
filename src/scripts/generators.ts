import { take } from './utils'

function* fibonacci_gen() {
  yield 0
  yield 1
  let n1 = 0,
    n2 = 1
  while (true) {
    let res = n1 + n2 //fibonacci
    ;(n1 = n2), (n2 = res)
    yield res
  }
}
console.log(take(fibonacci_gen(), 21))

let i = 0
for (const e of fibonacci_gen()) {
  console.log(e)
  i++
  if (i > 20) break
}
// -> printa on each linw 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765
