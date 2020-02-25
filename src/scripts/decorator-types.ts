import { take } from './utils'

function Iterable(konstructor: Function) {
  konstructor.prototype[Symbol.iterator] = function() {
    return this.__iter__()
  }
}

@Iterable //make any object iterable as long as it has a *__iter__ generator method
class Test {
  private a: string
  private b: string
  private c: string

  constructor(a: string, b: string, c: string) {
    this.a = a
    this.b = b
    this.c = c
  }
  *__iter__() {
    yield this.a
    yield this.b
    yield this.b
    yield this.c
    yield this.c
    yield this.c
  }
}

let t: any = new Test('a', 'b', 'c')
for (let e of t) {
  console.log(e)
}
console.log(take(new Test('a', 'b', 'c') as any, 4))
