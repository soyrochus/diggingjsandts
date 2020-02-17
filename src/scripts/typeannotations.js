"use strict";
let x;
x = 10;
const y = 10;
class M {
    constructor(name) {
        this.name = name;
    }
}
const m = new M('Jorge');
console.log(m.name);
const double = (a) => {
    return a + a;
};
const doStuff = (callback) => {
    // do LOTS of stuff
    console.log(callback(100));
    console.log(callback(100));
    console.log(callback(100));
};
doStuff(double);
//# sourceMappingURL=typeannotations.js.map