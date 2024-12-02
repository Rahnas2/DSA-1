class stack{
    constructor(){
        this.items = []
        this.length = 0
    }
    isEmpty(){
        return this.length === 0
    }
    push(item){
        this.items[this.length] = item
        this.length++
    }
    pop(){
        const item = this.items[this.length-1]
        this.length--
        return item
    }
    print(){
        console.log(this.items)
    }

}


class Queue2{
    constructor(){
        this.items = []
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
        return 
    }

    dequeue(){
        const item =this.items[this.front]
        delete this.items[this.front]
        this.front++
        return 
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    printQueue(){
        let output = ''
        for(let i=this.front;i<this.rear;i++){
            output += this.items[i] + ' '
        }
        return console.log(output)
    }
}

let sample = new stack()

sample.push(90)
sample.push(67)
sample.push(45)
sample.push(12)
sample.pop()
console.log(sample.print())
console.log(sample.items)

function reverseStack(stack){
    const values = Object.values(stack)
    const queue = Queue2()

    while(!stack.isEmpty()){
        queue.en
    }
}