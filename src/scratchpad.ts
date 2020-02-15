
let fullName = `Perico Palotes`
let age = 37
let sentence = `Hola, me llamo ${ fullName }`
console.log(sentence)

let englishName = function(name: any){

  let sentence = `Hello, my name is ${ name }`
  console.log(sentence) 
}
englishName(fullName)
englishName(1000)   // Hello, my name is 1000

let englishName2 = function(name: string){

  let sentence = `Hello, my name is ${ name }`
  console.log(sentence) 
}

englishName2(fullName)
//Error: Argument of type '1000' is not assignable to parameter of type 'string'.ts(2345
//englishName2(1000)   // Hello, my name is 1000

