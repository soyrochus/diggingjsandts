import {promisify} from 'util'
import {readFile} from 'fs'
//const {promisify}  = require('util');
//const {readFile} = require('fs');
let readFp = promisify(readFile)

console.log("you see me first")
async function printIronMan() {
   let data = await readFp("ironman.txt", 'utf8')
   console.log("you see me last")
   for(let s of data.split('\n')){
       console.log(s)
   }
}
printIronMan()
console.log("you see me last")

