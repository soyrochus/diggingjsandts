import { promisify } from 'util'
import { readFile, writeFile } from 'fs'
//const {promisify}  = require('util');
//const {readFile} = require('fs');

let prnerror = (error: any) => {
    console.log(error)
}
console.log('you see me first')
let readFp = promisify(readFile)
let writeFp = promisify(writeFile)

readFp('ironman.txt', 'utf8')
    .then(data => {
        console.log('you see me last')
        for (let s of data.split('\n')) {
            console.log(s)
        }
        return writeFp('ironman.out.txt', data, 'utf8')
    })
    .then(() => {
        console.log('file written')
    })
    .catch(prnerror)
