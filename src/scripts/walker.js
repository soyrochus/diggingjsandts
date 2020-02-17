"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//requiring path and fs modules
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
//joining path of directory 
const directoryPath = path_1.default.join("./", 'node_modules');
//passsing directoryPath and callback function
fs_1.readdir(directoryPath, function (err, files) {
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
function walker(item, operation) {
    if (item.type == "node") {
        operation(item.node);
    }
    else {
        walker(item, operation);
    }
}
//# sourceMappingURL=walker.js.map