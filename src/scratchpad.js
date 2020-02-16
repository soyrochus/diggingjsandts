//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});


type Item<T> = 
    | {type: "node", node: T}
    | {type: "seq", seq: Array<Item<T>>}
 
 type ItemOperation<T> = (_: T) => void
 function walker<T>(item: Item<T>, operation: ItemOperation<T>):void {
     if (item.type == "node"){
        operation(item.node)
     }else {
        walker(item, operation)
     }
 }    


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
