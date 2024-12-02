class fixedSizeStack {

    constructor(capacity){
        this.items = []
        this.capacity = capacity
    }

    isFull(){
        return this.items.length === this.capacity
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(element){
        if(this.isFull()){
            return 'stack overflow'
        }
        this.items.push(element)
    }

    pop(){
        if(this.items.length === 0){
            return 'stack underflow'
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.items[this.items.length-1]
    }

}


const stack = new fixedSizeStack(3);

console.log(stack.isFull())

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isFull())

console.log(stack.peek())
console.log(stack.pop())