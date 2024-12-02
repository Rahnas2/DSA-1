//optimised level order traversal 

 class queue{
    constructor(value){
      this.value = value
      this.next = null
    }
 }

 class queueLinkedList{
    constructor(){
        this.rear = null
        this.front = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(value){
        const newNode = new queue(value)

        if(this.size === 0){
            this.rear = this.front = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }

    dequeue(){
       if(this.size === 0) return 'stack underflow'

       const removedValue = this.front.value
       this.front = this.front.next
       this.size--
       if(this.isEmpty()){
        this.rear = null
       }

       return removedValue
    }
 }


 class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
 }

 class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)

        if(this.isEmpty()){
            this.root = newNode
        } else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    levelOrder(){
        if(this.isEmpty()) return 'stack underflow'

        const queue = new queueLinkedList()
        queue.enqueue(this.root) 

        while(!queue.isEmpty()){
            const currNode = queue.dequeue()
            process.stdout.write(currNode.value + ' ')

            if(currNode.left){
                queue.enqueue(currNode.left)
            }

            if(currNode.right){
                queue.enqueue(currNode.right)
            }
        }
    }
 }

 const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)
bst.insert(3)

bst.levelOrder()