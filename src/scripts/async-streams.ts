async function* _operate<T>(source: AsyncIterable<T>, operation: (value: T) => AsyncIterable<T>): AsyncIterable<T> {
  const It = source[Symbol.asyncIterator]

  let it: AsyncIterator<T> = It.call(source)
  while (true) {
    const { done, value } = await it.next()
    if (done) {
      return
    }
    yield* operation(value)
  }
}

export async function* filter<T>(source: AsyncIterable<T>, predicate: (value: T) => boolean): AsyncIterable<T> {
  yield* _operate(source, async function*(value) {
    if (predicate(value)) {
      yield value
    }
  })
}

export async function* map<T>(source: AsyncIterable<T>, mapper: (value: T) => T): AsyncIterable<T> {
  yield* _operate(source, async function*(value) {
    yield mapper(value)
  })
}

export async function* take<T>(source: AsyncIterable<T>, num: number | bigint): AsyncIterable<T> {
  let i = 0
  yield* _operate(source, async function*(value) {
    if (i < num) {
      yield value
      i++
    }
  })
}

/* 
 export async function* filter<T>(source: AsyncIterable<T>, predicate: (value: T) => boolean): AsyncIterable<T> {
    const It = source[Symbol.asyncIterator]

    let it: AsyncIterator<T> = It.call(source)
    while (true) {
        const { done, value } = await it.next()
        if (done) {
            return
        }
        if (predicate(value)) {
            yield value
        }
    }
}

 export async function* map<T>(source: AsyncIterable<T>, mapper: (value: T) => T): AsyncIterable<T> {
    const It = source[Symbol.asyncIterator]

    let it: AsyncIterator<T> = It.call(source)
    while (true) {
        const { done, value } = await it.next()
        if (done) {
            return
        }

        yield mapper(value)
    }
}

export async function* take<T>(source: AsyncIterable<T>, num: number | bigint): AsyncIterable<T> {
    const It = source[Symbol.asyncIterator]

    let it: AsyncIterator<T> = It.call(source)
    let i = 0
    while (true) {
        const { done, value } = await it.next()
        if (done) {
            return
        }
        if (i < num) {
            yield value
            i++
        }
    }
}
*/
export interface AsyncStream<T> {
  filter: (predicate: (value: T) => boolean) => AsyncStream<T>
  map: (mapper: (value: T) => T) => AsyncStream<T>

  all: () => AsyncIterable<T>
  take: (n: number | bigint) => AsyncIterable<T>
}

export function async_stream<T>(source: AsyncIterable<T>): AsyncStream<T> {
  let _source_ = source
  return {
    filter(condition) {
      _source_ = filter(_source_, condition)
      return this
    },
    map(mapper) {
      _source_ = map(_source_, mapper)
      return this
    },
    all() {
      return _source_
    },
    take(num) {
      _source_ = take(_source_, num)
      return _source_
    },
  }
}
