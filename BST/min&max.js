
class Node{
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
        }else{
            this.insertHelper(this.root, newNode)
        }
    }

    insertHelper(root , newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertHelper(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertHelper(root.right, newNode)
            }
        }
    }

    minValue(){
        if(this.isEmpty()) return null
        return this.minValueHelper(this.root)
    }

    minValueHelper(root){
        if(root.left === null) return root.value
        return this.minValueHelper(root.left)
    }

    maxValue(){
        if(this.isEmpty()) return null
        return this.maxValueHelper(this.root)
    }

    maxValueHelper(root){
        if(root.right === null) return root.value
        return this.maxValueHelper(root.right)
    }
}


let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(7)
bst.insert(15)
bst.insert(6)
bst.insert(3)

console.log(bst.minValue())
console.log(bst.maxValue())