function fibonacci_iterator() {
  return {
    n1: 0,
    n2: 1,
    shift(n) {
      this.n2 = n
    },
    next() {
      let res = this.n1
      this.n1 = this.n2
      this.n2 = res + this.n1 //fibonaci
      return { value: res, done: false }
    },
  }
}

let fibonaci_iter = num => {
  let iterator = fibonacci_iterator()
  let fib = []
  for (let i = 0; i <= 20; i++) {
    let { value, done } = iterator.next()
    fib.push(value)
  }
  return fib
}

console.log(fibonaci_iter(20)) //  // -> [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]
