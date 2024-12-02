class Node{
    constructor(value){
        this.prev = null
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.head.prev = this.tail
            this.tail = node
            this.tail.next = this.head
            this.size++
            return 
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
        this.tail.next = node
        this.head.prev = this.tail
        this.size++
        return 
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.head.prev = this.head
            this.tail = node
            this.tail.next = this.node
            this.size++
            return
        }
        this.tail.next = node
        node.prev = this.tail 
        this.tail = node
        this.tail.next = this.head
        this.size++
        return
    }

    printReverse(){
        let curr = this.tail
        let reversedLIst = ''
        while(curr){
            reversedLIst += `${curr.value} `
            if(curr === this.head) break
            curr = curr.prev
        }
        return console.log('reversedList: ',reversedLIst)
    }

    insert(position,value){
        if(position < 1 || position > this.getSize()) return console.log('invalid position')
        if(position === 1){
            this.prepend(value)
            return
        }
        if(position === this.getSize()+1){
            this.append(value)
            return
        }
        const node = new Node(value)
        if(position === this.getSize()){
          this.tail.prev.next = node
          node.next = this.tail  
          node.prev = this.tail.prev
          this.tail.prev = node
          this.size++
          return
        }
        let mid = Math.floor(this.getSize()) / 2
        console.log(mid,position)
        if(position <= mid){
           let start = 1 
           let curr = this.head
           while(start != position){
             curr = curr.next
             start++
           }
           node.next = curr
           node.prev = curr.prev
           curr.prev.next = node
           curr.prev = node
           this.size++
           return 
        }else{
            let start = this.getSize() - 1
            let curr = this.tail.prev
            while(start != position){
                curr = curr.prev
                start--
            }
            node.next = curr
            node.prev = curr.prev
            curr.prev.next = node
            curr.prev = node
            this.size++
            return
        }
    }
    deleteBigning(){
        this.head = this.head.next
        this.head.prev = this.tail
        this.tail.next = this.head
        this.size--
    }
    deleteFromEnd(){
        this.tail.prev.next = null
        this.tail = this.tail.prev
        this.tail.next = this.head
        this.size--
    }
    deleteWithPosition(position){
        if(position < 1 || position > this.getSize()) return console.log('invalid position')
        if(position === 1){
            this.deleteBigning
            return
        }
        if(position === this.getSize()){
            this.deleteFromEnd()
        }
        let start = 2
        let curr = this.head.next
        while(start != position-1){
            curr = curr.next
            start++
        }
        curr.next = curr.next.next
        curr.next.next.prev = curr.prev.prev
        this.size--
        return 
    }
    print(){
        let curr = this.head
        let listItems = []
        while(curr){
           listItems.push(curr.prev, curr.value, curr.next)

           if(curr == this.tail) break

           curr = curr.next
        }
    return console.log(listItems)
    }
}

const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(89)
list.append(45)
list.append(78)
list.append(3)
list.append(1)
// list.insert(5,90)

// list.deleteBigning()
// list.deleteFromEnd()
// list.deleteWithPosition(3)
list.print()
list.printReverse()

console.log(list.getSize())