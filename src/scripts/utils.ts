export interface Iterator {
    [Symbol.iterator]: any
}
export function take(iter: Iterator, n: number | bigint) {
    let i = 0
    let res = []
    for (let e of iter) {
        if (i >= n) break
        i++
        res.push(e)
    }
    return res
}
