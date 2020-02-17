"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.readFile('d:/tmp/data.txt', (err, buf) => {
    console.log(buf.toString());
});
//# sourceMappingURL=contextual.js.map