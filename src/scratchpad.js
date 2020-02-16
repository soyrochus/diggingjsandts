//import {readFile} from 'fs'
const {readFile} = require('fs')

readFile("app/ironman.txt", 'utf8', (error, data)=> {
    if (error) throw error

    for(let s of data.split('\n')){
        console.log(s)
    }
})