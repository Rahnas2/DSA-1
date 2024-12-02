// queue with dequeue has linear time complexity O(n)

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[0]
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString())
//     }

// }

// const queue = new Queue()

// console.log(queue.isEmpty())

// queue.enqueue(89)
// queue.enqueue(89)
// queue.enqueue(12)

// console.log(queue.size())
// console.log(queue.peek())
// console.log(queue.print())


//optimised queue implimentaion

class Queue2{
    constructor(){
        this.items = {}
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

const queue2 = new Queue2()

console.log(queue2.isEmpty())

queue2.enqueue(89)
queue2.enqueue(56)
queue2.enqueue(67)
queue2.enqueue(12)
queue2.dequeue()
queue2.printQueue()
console.log(queue2.peek())
console.log(queue2.isEmpty())


console.log('hel',queue2.printQueue())