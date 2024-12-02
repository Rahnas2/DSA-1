class Queue {
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
        for(let i=0;i<this.stack2.length;i++){
            this.stack1.push(this.stack2.pop())
        }
        this.stack1.push(value)
    }

    dequee(){
        if(!this.stack1.length && !this.stack2.length){
           return 'stack underflow'
        } 
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack1.length > 0){
            return this.stack1[0]
        }
        return this.stack2[this.stack2.length-1]
    }

    print(){
        if(this.stack1.length === 0){
            return this.stack2
        }else{
            return this.stack1
        }
    }
}


const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.peek())
console.log(queue.dequee())
console.log(queue.peek())
console.log(queue.print())