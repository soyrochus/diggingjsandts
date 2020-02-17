//requiring path and fs modules
import path from 'path'
import {readdir} from 'fs'
//joining path of directory 
const directoryPath = path.join("./", 'node_modules');
//passsing directoryPath and callback function
readdir(directoryPath, function (err, files) {
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

