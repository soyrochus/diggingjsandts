
import {promisify} from 'util'
import {readFile} from 'fs'
//const util = require('util');

let prnerror = (error)=> {
    console.log(error)
}
console.log("you see me first")
let readFp = promisify(readFile)

readFp("app/ironman.txt", 'utf8').then((data)=> {
   
   console.log("you see me last")
   for(let s of data.split('\n')){
       console.log(s)
   }
}).catch(prnerror)

console.log("you see me second")

console.log("----------------------------------")

console.log("you see me first")
async function printIronMan() {
    let data = await readFp("app/ironman.txt", 'utf8')
    console.log("you see me last")
    for(let s of data.split('\n')){
        console.log(s)
    }
}
printIronMan()
console.log("you see me last")



import {promisify} from 'util'
import {readFile} from 'fs'
//const {promisify}  = require('util');
//const {readFile} = require('fs');
let readFp = promisify(readFile)

console.log("you see me first")
async function printIronMan() {
    let data = await readFp("app/ironman.txt", 'utf8')
    console.log("you see me last")
    for(let s of data.split('\n')){
        console.log(s)
    }
}
printIronMan()
console.log("you see me last")