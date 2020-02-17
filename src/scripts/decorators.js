"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable-next-line:ban-types
/*
  A method decorator takes a 3 arguments:

  target - the method being decorated.
  key - the name of the method being decorated.
  value - a property descriptor of the given property if it exists on the object,
  undefined otherwise. The property descriptor is obtained by invoking the
  Object.getOwnPropertyDescriptor() function.

*/
function log(target, key, value) {
    return {
        value(...args) {
            const result = value.value.apply(this, args);
            console.log(`method: '${key}' called with arguments '${args}' and with result: '${result}'`);
            return result;
        },
    };
}
class Demo {
    say(...args) {
        console.log('Inside say with arguments: ', args);
        return 100;
    }
}
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Demo.prototype, "say", null);
const d = new Demo();
d.say('Booh', 'Lala');
d.say('Bah');
//# sourceMappingURL=decorators.js.map