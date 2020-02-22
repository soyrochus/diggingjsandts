let createShoppingItem = (name, count, onsale) => {
    return {
        name,
        count: 10,
        onSale: true,
        report: function() {
            let forSale
                if(this.sale){
                    forSale = "for Sale! See the offer..."
                } else {
                   forSale = "not for Sale. Normal price-quote in effect."
                }
               console.log(`The product ${this.name} is ${forSale}`)
        }
    }
}
 
 let shoppingItem = createShoppingItem("orange", 10, true)
 shoppingItem.report() // -> The product orange is for Sale! See the offer...

 function ShoppingItem(name, count, onsale) {
    this.name  = name
    this.count = count
    this.onsale = onsale 
 }
 ShoppingItem.prototype.report = function() {
    let forSale
    if(this.onsale){
        forSale = "for Sale! See the offer..."
    } else {
        forSale = "not for Sale. Normal price-quote in effect."
    }
    console.log(`The product ${this.name} is ${forSale}`)
}

//The right way
let orange = new ShoppingItem("orange", 10, true)
orange.report() // -> The product orange is for Sale! See the offer...


// The wrong way
name = "Very Import Value in Global Variable"
orange = ShoppingItem("orange", 10, true)
console.log(name) // OOPS
orange.report() // -> TypeError: Cannot read property 'report' of undefined
