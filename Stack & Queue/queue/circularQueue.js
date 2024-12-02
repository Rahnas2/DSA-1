class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull(){
        return this.currLength === this.capacity
    }

    isEmpty(){
        return this.currLength === 0
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity
            this.items[this.rear] = element
            this.currLength++
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currLength--

        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.front]
    }

    print(){
        if(this.isEmpty()){
            return 'queue is empty'
        }
        let i
        let str = ''
        for(i=this.front; i!=this.rear; i = (i+1) % this.capacity){
            console.log(i)
            str += this.items[i] + ' '
        }
        str += this.items[i]
        return str
    }
}

const sample = new circularQueue(5)
sample.enqueue(10)
sample.enqueue(20)
sample.enqueue(30)
sample.enqueue(40)

console.log('full',sample.isFull())
sample.enqueue(50)

console.log('hello',sample.print())

console.log(sample.dequeue())
console.log(sample.peek())

console.log('hello',sample.print())

sample.enqueue(60)

console.log('hello',sample.print())