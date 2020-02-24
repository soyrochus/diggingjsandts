import * as fs from 'fs'
import { join } from 'path'

async function* getFiles(path: string): AsyncGenerator<[string, fs.Stats]> {
    const dir = await fs.promises.opendir(path)
    for await (const dirent of dir) {
        const f = join(path, dirent.name)
        yield [f, await fs.promises.stat(f)]
    }
}

async function main() {
    for await (const [name, stat] of getFiles('/home/iwk/Downloads')) {
        console.log(name, stat.isFile(), stat.size)
    }
}

main()
