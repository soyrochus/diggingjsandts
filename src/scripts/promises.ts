import {promisify} from 'util'
import {readFile} from 'fs'
//const {promisify}  = require('util');
//const {readFile} = require('fs');


let prnerror = (error: any)=> {
   console.log(error)
}
console.log("you see me first")
let readFp = promisify(readFile)

readFp("ironman.txt", 'utf8').then((data)=> {
 
  console.log("you see me last")
  for(let s of data.split('\n')){
      console.log(s)
  }
}).catch(prnerror)
