import  {join} from 'path'
import * as fs from 'fs'
import { Item, seq, node, addseq, walker_sync , walker} from './walker'

type fileName = string;


async function getFiles(path: string): Promise<Item<fileName>> {
    
    let root = seq<fileName>()
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
       
        if (dirent.isDirectory()){
            let subdir = join(path, dirent.name)    
            addseq(root, await getFiles(subdir))
        }else {
            addseq(root, node(dirent.name))  
        }
    }
    return root
}
 
async function main(){
    try{
        let files = await getFiles("/home/iwk/Music")
        let prnItem = (s: string) => {
            console.log(s)
        } 

        let asyncPrinItem = (s: string ) : Promise<void> => {
            return new Promise((resolve)=>{
                setImmediate(()=> {
                    console.log(s)
                    resolve()
                })
            })
        }
       
        walker_sync(files, prnItem)

        walker(files, asyncPrinItem)

    }catch(e){
        console.log(e)
    }
}

main()