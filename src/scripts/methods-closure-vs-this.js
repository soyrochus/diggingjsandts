
const newStack_closure = () => {
    const items = []

    return {
        depth: () => items.length,
        top: () => items[0],
        push: newTop => {
            items.unshift(newTop)
        },
        pop: ()=> { 
            items.shift()
        }
    }
}

const newStack_this = ()=>{
    
    return {
        items:[],
        // depth: function() ...
        depth() {
            return this.items.length
        },
        // top: function() ...
        top() {
            return this.items[0]
        },
        // etc.....
        push(newTop) {
            this.items.unshift(newTop)
        },
        pop() { 
            this.items.shift()
        }
    }
}

const StackPrototype = function(){
    this.items = []
}
StackPrototype.prototype = {
    depth: function() {
        return this.items.length
    },
    top: function()  {
        return this.items[0]
    },
    push: function (newTop) {
        this.items.unshift(newTop)
    },
    pop: function() { 
        this.items.shift()
    }
}

const stack_closure = newStack_closure()
const stack_this = newStack_this()
const stack_prototype = new StackPrototype()

stack_closure.push(0)
stack_closure.push(1)
stack_closure.push(2)

stack_this.push(0)
stack_this.push(1)
stack_this.push(2)

stack_prototype.push(0)
stack_prototype.push(1)
stack_prototype.push(2)

console.log(stack_closure.top(), stack_this.top(), stack_prototype.top())
console.log(stack_closure.depth(), stack_this.depth(), stack_prototype.depth())

stack_closure.pop()
stack_this.pop()
stack_prototype.pop()

console.log(stack_closure.top(), stack_this.top(), stack_prototype.top())
console.log(stack_closure.depth(), stack_this.depth(), stack_prototype.depth())