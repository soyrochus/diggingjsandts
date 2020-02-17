let shoppingList = [["orange", 10, "REGULAR"],
                   ["apple", 2, "SALE"],
                   ["orange", 15, "REGULAR"]]

let toSale = (e) => {
 if (e[2] == "SALE")
     e[2] = true
   else 
     e[2] = false
 return e
}
let big = (e) => e[1]> 5                    

let products = shoppingList.map(toSale).filter(big)
console.log(products) // -> [ [ 'orange', 10, false ], [ 'orange', 15, false ] ]