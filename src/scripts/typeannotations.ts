let x: number;
x = 10;

const y = 10;
interface Named {
    name: string;
}
class M implements Named {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const m: Named = new M('Jorge');
console.log(m.name);

const double = (a: number): number => {
    return a + a;
};

type Doubler = (a: number) => number;

const doStuff = (callback: Doubler) => {
    // do LOTS of stuff
    console.log(callback(100));
    console.log(callback(100));
    console.log(callback(100));
};
doStuff(double);
