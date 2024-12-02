class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedLIst{
    constructor(){
        this.head = null
        this.tail = null
    }
    prepend(value){
        const node = new Node(value)
        if(this.head == null){
            this.head = node
            this.tail = node
            this.tail.next = this.head
            return
        }
        node.next = this.head
        this.head = node
        this.tail.next = this.head

    }
    append(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
            this.tail = node
            this.tail.next = this.head
            return
        }
        this.tail.next = node
        this.tail = node
        node.next = this.head
        return 
    }
    removeBegin(){
        if(this.head === this.tail){
            this.head = null
            this.tail = null
            return
        }
        this.head = this.head.next
        this.tail.next = this.head
    }
    removeEnd(){
        if(this.head === this.tail){
          this.head = null
          this.tail = null
          return
        }
        let curr = this.head
        while(curr.next != this.tail){
            curr = curr.next
        }
        curr.next = this.head
        this.tail = curr
        return
    }
    display(){
        let curr = this.head
        let listItems = []
        while(curr){
            listItems.push(curr.value,curr.next)

            if(curr == this.tail) break

            curr = curr.next
        }
        return console.log('listItem: ',listItems)
    }
}

const sample = new LinkedLIst()
sample.prepend(78)
sample.prepend(67)
sample.append(23)
sample.append(56)
sample.append(12)
sample.append(34)
sample.prepend(89)
sample.removeBegin()
sample.removeEnd()
sample.display()