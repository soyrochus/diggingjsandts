function cache(target: any, methodName: string, descriptor: PropertyDescriptor): any {
    const method = descriptor.value
    const _cache = new Map<string, any>()

    descriptor.value = function(...args: any[]): any {
        const key = JSON.stringify(args)

        if (_cache.has(key)) {
            return _cache.get(key)
        } else {
            const res = method.apply(this, args)
            _cache.set(key, res)
            return res
        }
    }
}

class Fibonacci {
    @cache
    static calc(n: number): number {
        console.log(`fibonacci(${n})`)

        if (n === 0 || n === 1) {
            return n
        } else {
            return this.calc(n - 1) + this.calc(n - 2)
        }
    }
}

console.log(Fibonacci.calc(27)) //-> 196418
