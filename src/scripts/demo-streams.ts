import * as fs from 'fs'
import { join } from 'path'
import { map, filter, take, async_stream } from './async-streams'

async function* getFiles(path: string): AsyncGenerator<[string, fs.Stats]> {
    const dir = await fs.promises.opendir(path)
    for await (const dirent of dir) {
        const f = join(path, dirent.name)
        yield [f, await fs.promises.stat(f)]
        if (dirent.isDirectory()) {
            yield* getFiles(f)
        }
    }
}

let isDir = ([_, stats]: [string, fs.Stats]) => stats.isDirectory()
let upper = ([name, stats]: [string, fs.Stats]): [string, fs.Stats] => [name.toUpperCase(), stats]

async function main(rootDir: string) {
    console.log('__________________________________________________________')
    for await (const [name, stat] of filter(getFiles(rootDir), isDir)) {
        console.log(name, stat.isFile(), stat.size)
    }
    console.log('__________________________________________________________')

    for await (const [name, stat] of async_stream(getFiles(rootDir))
        .filter(isDir)
        .all()) {
        console.log(name, stat.isFile(), stat.size)
    }
    console.log('__________________________________________________________')
    for await (const [name, stat] of take(filter(getFiles(rootDir), isDir), 5)) {
        console.log(name, stat.isFile(), stat.size)
    }
    console.log('__________________________________________________________')

    for await (const [name, stat] of async_stream(getFiles(rootDir))
        .filter(isDir)
        .take(5)) {
        console.log(name, stat.isFile(), stat.size)
    }
    console.log('__________________________________________________________')
    for await (const [name, stat] of take(map(filter(getFiles(rootDir), isDir), upper), 5)) {
        console.log(name, stat.isFile(), stat.size)
    }
    console.log('__________________________________________________________')

    for await (const [name, stat] of async_stream(getFiles(rootDir))
        .filter(isDir)
        .map(upper)
        .take(5)) {
        console.log(name, stat.isFile(), stat.size)
    }
}

main('/home/iwk/Music')
