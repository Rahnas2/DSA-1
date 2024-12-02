class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
}


function postfixEvaluation(exp){
    const stack = new Stack()
    for(let i=0;i<exp.length;i++){
        let c = exp[i]
        if(!isNaN(c)){
            stack.push(Number(c))
        }else{
            let val1 = stack.pop()
            let val2 = stack.pop()
            if(val1 == 'Underflow' || val2 == 'Underflow'){
                return 'cannot perform postfix evaluation'
            }
            switch(c){
                case '+': 
                stack.push(val2 + val1)
                break;
                case '-': 
                stack.push(val2 - val1)
                break;
                case '/': 
                stack.push(val2 / val1)
                break
                case '*': 
                stack.push(val2 * val1)
                break
            }
            console.log(stack)
        }
    }
    return stack.pop()
}


console.log('ans : ',postfixEvaluation("235*+8-"))