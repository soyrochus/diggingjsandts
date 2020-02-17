"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../app/services");
const services_2 = require("../app/services");
const greetings = __importStar(require("../app/services"));
const defaultservices_1 = __importDefault(require("../app/defaultservices"));
console.log(services_1.hello());
console.log(services_2.hola());
console.log(greetings.hello());
const msg = new defaultservices_1.default();
console.log(msg.hola());
//# sourceMappingURL=testimports.js.map