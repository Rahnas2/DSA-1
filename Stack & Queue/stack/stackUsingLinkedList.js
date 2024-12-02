class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class stack {
    constructor(){
        this.top = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return 'stack underflow'
        }

        const item = this.top
        this.top = this.top.next
        this.size--
        return item
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.top.value
    }

    display(){
        let curr = this.top
        let str = ''
        while(curr){
            str+= `${curr.value} `
            curr = curr.next
        }
        return str
    }

}


const sample = new stack()

sample.push(90)
sample.push(78)
sample.push(45)
console.log(sample.peek())
sample.pop()
console.log(sample.peek())
console.log(sample.display())