let buildName = (firstName, lastName, title = 'Mr./Ms.') => {
  if (lastName) return `${title} ${firstName} ${lastName}`
  else return `${firstName}`
}

// Note that this will not work in TypeScript with strict options set. It will fail to compile with
// error TS2554: Expected 2-3 arguments, but got 1.
console.log(buildName('John')) // -> ‘John’
console.log(buildName('Rupert', 'Grint')) // -> ‘Mr./Ms. Rupert Grint’
console.log(buildName('Emma', 'Watson', 'Miss')) // -> ‘Miss Emma Watson’

//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

let cast = (...castmembers) => {
  console.log(`Harry Potter cast members are: ${castmembers} `)
}
cast('Daniel Radcliffe', 'Emma Watson', 'Rupter Grint', 'Alan Rickman', 'Michael Gambon')
