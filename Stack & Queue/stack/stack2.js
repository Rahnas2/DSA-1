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

function isBalancedChecing(expression){
    const stack = new Stack

    let pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    for(i=0;i<expression.length;i++){
        console.log('stack',stack)
        if(['(', '[', '{'].includes(expression[i])){
            stack.push(expression[i])
        }else if([')', ']', '}'].includes(expression[i])){
            if(stack.isEmpty() || stack.pop !== pairs[expression[i]]){
                return false
            } 
        }
    }
    // return stack.isEmpty()
}




console.log('reveresed string',reverseString('hello world!'))

console.log(isBalancedChecing("(a + b] * c)")); 