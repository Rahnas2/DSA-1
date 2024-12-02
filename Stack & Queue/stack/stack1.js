class Stack{
    constructor(){
        this.stack = []
    }

    isEmpty(){
        return this.stack.length === 0
    }

    length(){
        return this.stack.length
    }
    
    push(element){
       this.stack[this.stack.length] = element
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('sorry stack is empty')
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('sorry your stack is empty')
        }
        return this.stack[this.stack.length-1]
    }

    clear(){
        this.stack = []
    }
    
    print(){
        let str = ''
        for(let i=0;i<this.length();i++){
            str += this.stack[i] + ' '
        }
        return str
    }
}


function reverseString(string){
    const stack = new Stack()
    
    for(let char of string){
        stack.push(char)
    }

    let reversed = ''
    
    while(!stack.isEmpty()){
        reversed += stack.pop()
    }
    
    return reversed
}


const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
console.log('len',stack.length())
console.log('print1',stack.print())

console.log(stack.peek())

stack.pop()
console.log(stack.print())

stack.clear()
console.log(stack.print())