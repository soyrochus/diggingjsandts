let shoppingItem = {
    name: "orange",
    number: 10,
    sale: true,
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
 
 shoppingItem.report() // -> The product orange is for Sale! See the offer...


 let getlang = (name)=>{
    return "EN"  // mock for demonstration purposes
 }
 let name =  "orange"
 let number = 10
 
 let shoppingItem2 = {
    number,
    sale: true,
    [getlang(name)]: name.toLowerCase(),
 
    report() {
        let forSale
        if(this.sale){
            forSale = "for Sale! See the offer..."
        } else {
            forSale = "not for Sale. Normal price-quote in effect."
        }
        console.log(`The product ${this.EN} ${forSale}`)
    }
 }
 
 shoppingItem2.report() // -> The product orange is for Sale! See the offer...