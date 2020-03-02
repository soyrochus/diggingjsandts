let templ = { title: 'Professor', school: 'Hogwarts' }

let teacher1 = function(firstName, surName) {
    return `${this.title} ${firstName} ${surName} at ${this.school}`
}

console.log(teacher1.apply(templ, ['Minerva', 'McGonagall'])) // -> Professor Minerva McGonagall at Hogwarts
console.log(teacher1.call(templ, 'Minerva', 'McGonagall')) // -> Professor Minerva McGonagall at Hogwarts

let boundteacher1 = teacher1.bind(templ)
console.log(boundteacher1('Minerva', 'McGonagall')) // -> Professor Minerva McGonagall at Hogwarts

let teacher2 = (firstName, surName) => {
    return `${this.title} ${firstName} ${surName} at ${this.school}`
}

console.log(teacher2.apply(templ, ['Minerva', 'McGonagall'])) // -> undefined Minerva McGonagall at undefined
console.log(teacher2.call(templ, 'Minerva', 'McGonagall')) // -> undefined Minerva McGonagall at undefined

let boundteacher2 = teacher2.bind(templ)
console.log(boundteacher2('Minerva', 'McGonagall')) // -> undefined Minerva McGonagall at undefined
