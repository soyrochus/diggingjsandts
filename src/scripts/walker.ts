//requiring path and fs modules



export type Item<T> = 
    | {type: "node", node: T}
    | {type: "seq", seq: Array<Item<T>>}

export function node<T>(e: T): Item<T> {
    return {type: "node", node: e}
}   

export function seq<T>(...elements: Array<Item<T>>) : Item<T> {
    return {type: "seq", seq: elements}
}

export function addseq<T>(item: Item<T>, newItem: Item<T>): Item<T>{
    if (item.type == "seq"){
        let {seq} = item
        seq.push(newItem)
        return item
    } else {
        throw new Error("Cannot Item to node")
    }
}

export type ItemOperation<T> = (_: T) => void
export function walker<T>(item: Item<T>, operation: ItemOperation<T>):void {
    if (item.type == "node"){
        operation(item.node)
    }else {
        for(const e of item.seq){
            if (e.type == "node"){
                operation(e.node)
            }else {
                walker(e, operation)
            }
        }
    }
}    


