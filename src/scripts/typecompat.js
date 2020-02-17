"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
let p;
// OK, because of structural typing
p = new Person('Hagard');
console.log(p);
// ---------------------------------------------------------
// also with anonymous objects
const o = { name: 'Olaf', surname: 'Leifson' };
p = o;
// compile error
// let n : Named =  { name: "Olaf" , surname: "Leifson"}
console.log(p);
//# sourceMappingURL=typecompat.js.map