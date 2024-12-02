
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
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

    contain(value){
        return this.containHelper(this.root,value)
    }

    containHelper(root, value){
        if(root === null){
            return false
        }
        if(root.value === value) return true
        if(value < root.value){
            return this.containHelper(root.left, value)
        }else{
            return this.containHelper(root.right, value)
        }
    }

    //traversal start

    preOrder(){
        if(this.isEmpty()) return 'tree is empty'
        this.preOrderHelper(this.root)
    }

    preOrderHelper(root){
        if(!root) return ''

        process.stdout.write(`${root.value} `)

        this.preOrderHelper(root.left)
        this.preOrderHelper(root.right)
        
    }

    inOrder(){
        if(this.isEmpty()) return 'tree is empty'

        this.inOrderHelper(this.root)
    }

    inOrderHelper(root){
       if(!root) return 

       this.inOrderHelper(root.left)
       process.stdout.write(`${root.value} `)
       this.inOrderHelper(root.right)
    }

    postOrder(){
        if(this.isEmpty()) return 'tree is empty'

        this.postOrderHelper(this.root)
    }

    postOrderHelper(root){
        if(!root) return 

        this.postOrderHelper(root.left)
        this.postOrderHelper(root.right)
        process.stdout.write(`${root.value} `)
    }

    levelOrder(){
        if(this.isEmpty()) return 'tree is empty'
        this.levelOrderHelper(this.root)
    }

    levelOrderHelper(root){
        let queue = []
        queue.push(root)
        while(queue.length > 0){

            let node = queue.shift()

            process.stdout.write(node.value + ' ')

            if(node.left){
              queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }

    
    //traversal end

}



const BST = new BinarySearchTree()

BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(7)
BST.insert(3)

// BST.insert(1)
// BST.insert(2)
// BST.insert(4)
// BST.insert(5)
// BST.insert(3)
// BST.insert(6)

console.log(BST.contain(10))
console.log(BST.contain(5))
console.log(BST.contain(7))
console.log(BST.contain(15))
console.log(BST.contain(100))

BST.preOrder()
console.log()
console.log('inorder',BST.inOrder())
console.log()
console.log('post order',BST.postOrder())

console.log()

console.log('level order',BST.levelOrder())

console.log()

console.log('tree is empty?',BST.isEmpty())

