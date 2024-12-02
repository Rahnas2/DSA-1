class Node{
    constructor(value){
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
            this.tail = node   
        }else{
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.tail = node
            this.head = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    //add after a value
    addAfter(existingVal, newVal){
        if(this.isEmpty()){
            console.log('your list is empty')
            return 
        }
        let curr = this.head
        while(curr.next && curr.value != existingVal){
            curr = curr.next
        }
        if(curr.value === existingVal){
            const node = new Node(newVal)
            node.next = curr.next
            curr.next = node

            this.size++
        }else{
            return console.log('value not found')
        }
    }

    //add before a value
    addBefore(existingVal,newVal){
        if(this.isEmpty()){
            return console.log('your list is empty')
        }
        let prev = this.head
        if(existingVal === this.head.value){
            // const node = new Node(newVal)
            // node.next = this.head
            // this.head = node

            // this.size++
            // return 
            this.prepend(newVal)
            return 
        }
        while(prev.next && prev.next.value != existingVal){
              prev = prev.next
        }
        if(prev.next){
            const node = new Node(newVal)
            node.next = prev.next
            prev.next = node
            this.size++
        }else{
            return console.log('value not found')
        }
    }

    //delete from begining
    removeFromFront(){
        if(this.isEmpty()){
            return console.log('your list is empty')
        }else{
            this.head = this.head.next
            this.size--
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return console.log('your list is empty')
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next != this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        } 
        this.size--       
    }

    //convert linked list to array
    linkedLIstToArray(){
        let curr = this.head
        let resultedArray = []
        while(curr){
           resultedArray.push(curr.value)
           curr = curr.next
        }
        return resultedArray
    }

    //convert array to linked list
    arrayToLinkedList(array){
        this.head = new Node(array[0])
        let curr = this.head
        for(let i=1;i<array.length;i++){
            curr.next = new Node(array[i])
            curr = curr.next
        }
        this.size = array.length
    }
    

    //convert linked list to string
    linkedLIstToString(){
        let curr = this.head
        let resultedString = ''
        while(curr){
            resultedString += `${curr.value} `
            curr = curr.next
        }
        return resultedString
    }

    //convert string to linked list
    StringToLinkedLIst(str){
        this.head = new Node(str[0])
        let curr = this.head
        for(let i=1;i<str.length;i++){
            curr.next = new Node(str[i])
            curr = curr.next
        }
        this.size = str.length
    }

    getMiddle(){
        if(this.head === null) return 
        let fastPointer = this.head
        let slowPointer = this.head
        while(fastPointer!=null && fastPointer.next !=null){
            fastPointer = fastPointer.next.next
            slowPointer = slowPointer.next
        }
        return slowPointer
    }

    deleteMidlle(){
        const item = this.getMiddle()
        let curr = this.head
        while(curr.next != item){
            curr = curr.next
        }
        curr.next = curr.next.next
    }
    

    //print nodes
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log('list values: ',listValues)
        return listValues
    }
}

const list2 = new LinkedList()
list2.prepend(6)
list2.append(8)
list2.append(89)
list2.append(6)
list2.append(89)

console.log('size',list2.getSize())
console.log(list2.getMiddle())
list2.deleteMidlle()
list2.print()



