//requiring path and fs modules

export type Item<T> = { type: 'node'; node: T } | { type: 'seq'; node: T; seq: Array<Item<T>> }

export function node<T>(e: T): Item<T> {
    return { type: 'node', node: e }
}

export function seq<T>(node: T, ...elements: Array<Item<T>>): Item<T> {
    return { type: 'seq', node, seq: elements }
}

export function addseq<T>(item: Item<T>, newItem: Item<T>): Item<T> {
    if (item.type == 'seq') {
        let { seq } = item
        seq.push(newItem)
        return item
    } else {
        throw new Error('Cannot Item to node')
    }
}

export type ItemOperation<T> = (item: T) => void
export function walker_sync<T, R>(item: Item<T>, operation: ItemOperation<T>) {
    if (item.type == 'node') {
        return operation(item.node)
    } else {
        operation(item.node)
        for (const e of item.seq) {
            if (e.type == 'node') {
                operation(e.node)
            } else {
                walker_sync(e, operation)
            }
        }
    }
}

export type AsyncItemOperation<T> = (item: T) => Promise<void>
/* export  interface AsyncItemOperation<T>{
    (item: T) : Promise<void>
}*/
export async function walker<T>(item: Item<T>, operation: AsyncItemOperation<T>): Promise<void> {
    if (item.type == 'node') {
        await operation(item.node)
    } else {
        await operation(item.node)
        for (const e of item.seq) {
            if (e.type == 'node') {
                await operation(e.node)
            } else {
                await walker(e, operation)
            }
        }
    }
}
