let buildName = (firstName: string, lastName?: string, title: string = 'Mr./Ms.') => {
  if (lastName) return `${title} ${firstName} ${lastName}`
  else return `${firstName}`
}

console.log(buildName('John')) // -> ‘John’
console.log(buildName('Rupert', 'Grint')) // -> ‘Mr./Ms. Rupert Grint’
console.log(buildName('Emma', 'Watson', 'Miss')) // -> ‘Miss Emma Watson’
