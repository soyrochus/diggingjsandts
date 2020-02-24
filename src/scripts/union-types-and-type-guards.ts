function _print(text: string | string[]): string {
    if (typeof text === 'string') {
        return text
    }

    // compiler now knows that you can use join
    // and that variable type is definitely string[]

    return text.join(' ')
}

let x1 = _print('hello text')
let y1 = _print(['hello', 'text', 'array'])

// let z = print(5) // Error: Argument of type '5' is not assignable to type 'string | string[]'

console.log(x1);
console.log(y1);

class Student {
    study() {
    }
}
class Professor {
    teach() {
    }
}
function getPerson(n: number): Student | Professor {
    if (n === 1) {
        return new Student()
    } else {
        return new Professor()
    }
}
let person: Student | Professor = getPerson(1)
if (person instanceof Student) {
    person.study() // OK
} else {
    // person.study(); // Error, person is of type Professor here.
    // so compiler recognizes we can call function teach()
    person.teach()
}

