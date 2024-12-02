class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(element){
        const node = new Node(element)
        if(this.size === 0){
            this.front = this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(this.size === 0){
            return 'stack underflow'
        }
        const removedNode = this.front
        this.front = this.front.next
        this.size--

        if(this.size === 0){
            this.rear = null
        }

        return removedNode.value
    }

    peek(){
        if(this.size === 0){
            return 'stack is empty'
        }
        return this.front.value
    }

    isEmpty(){
        return this.size === 0
    }

    display(){
        let curr  = this.front
        let result = []
        while(curr){
            result.push(curr)
            curr = curr.next
        }
        return result
    }
    
}


const sample = new queue

console.log(sample.isEmpty())

sample.enqueue(10);
sample.enqueue(20);
sample.enqueue(30);

console.log(sample.peek())
sample.dequeue()

console.log(sample.peek())
console.log(sample.display())

console.log(sample.isEmpty())