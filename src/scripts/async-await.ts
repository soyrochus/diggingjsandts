import { promisify } from 'util'
import { writeFile, readFile } from 'fs'
//const {promisify}  = require('util');
//const {readFile} = require('fs');
let readFp = promisify(readFile)
let writeFp = promisify(writeFile)

console.log('you see me first')
async function printIronMan() {
    try {
        let data = await readFp('ironman.txt', 'utf8')
        console.log('you see me last')
        for (let s of data.split('\n')) {
            console.log(s)
        }
        await writeFp('ironman.out.txt', data, 'utf8')
    } catch (err) {
        console.log(err)
    }
}
printIronMan()
console.log('you see me last')
