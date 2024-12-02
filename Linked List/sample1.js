class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
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

    //add node at the begining 
    prepend(value){
        // const node = new Node(value)
        // if(!this.isEmpty()){
        //     node.next = this.head
        // }
        // this.head = node
        // this.size++ 
        const node = new Node(value)
        if(this.isEmpty()){
            this.tail = node
        }else{
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    //add node at the end
    append(value){
        const node = new Node(value)
            if(!this.isEmpty()){
                let prev = this.head
                console.log('head begining',this.head)
                while(prev.next){
                    prev = prev.next
                    console.log('prev loop',prev)
                }
                prev.next = node
                console.log('head end',this.head)
            }else{
                this.head = node
                
            }
            this.size++
    }

    //add node at given index
    insert(value, index){
        if(index < 0 || index > this.size){
            return 
        }else if(index == 0){
            let node = new Node(value)
            node.next = this.head
            this.head = node
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            console.log(prev)
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    //remove node from given index
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index == 0){
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index;i++){
                if(i < index - 1){
                    prev = prev.next
                }else{
                    removedNode = prev.next
                }
            }
            prev.next = removedNode.next
        }
        this.size--
    }

    //remove node with value
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return 
        }
        let prev = this.head
        while(prev.next && prev.next.value != value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
            this.size--
            return
        }
        return console.log('value not found')
    }
    removeDuplicates(){
        let curr = this.head
        while(curr){
                let runner = curr
                while(runner.next){
                    if(runner.next.value === curr.value){
                        runner.next = runner.next.next

                    }else{
                        runner = runner.next
                    }
                }
            curr = curr.next
        }
    }
    removeMididle(){

        console.log('middle',mid)
        let curr = this.head
        let i = 0
        while(i < mid-1){
            curr = curr.next
            i++
        }
        curr.next = curr.next.next
        this.size--
    }

    //search 
    search(value){
        let position = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return console.log(`value found ${value} at position ${position}`)
            }else{
                position++
                curr = curr.next
            }
        }
        return console.log('search value not found')
    }

    //reverse the list
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            
        }
        this.head = prev
    }
    print(){
        if(this.isEmpty()){
            console.log('your lists is empty')
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log('list1: ',listValues)
        }
    }
}

const list1 = new LinkedList()
list1.prepend(7)
list1.prepend(9)
list1.prepend(10)
list1.prepend(78)
list1.prepend(7)
list1.prepend(89)
list1.removeMididle()
list1.print()
console.log('list is empty? ',list1.isEmpty())
console.log('list size: ',list1.getSize())