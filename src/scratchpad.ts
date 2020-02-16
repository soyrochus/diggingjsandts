import {readFile} from 'fs'

readFile("app/ironman.txt", 'utf8', (error: any, data: string)=> {
    if (error) throw error

    for(let s of data.split('\n')){
        console.log(s)
    }
})