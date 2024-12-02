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
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertHelper(this.root, node)
        }
    }

    insertHelper(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertHelper(root.left, node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertHelper(root.right, node)
            }
        }
    }

    levelOrder(){
        if(this.isEmpty()){
            return null
        }else{
            this.levelOrderHelper(this.root)
        }
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

    minValue(){
        if(this.isEmpty()) return null
        return this.minValueHelper(this.root)
    }

    minValueHelper(root){
        if(root.left === null) return root.value
        return this.minValueHelper(root.left)
    }

    delete(value){
        this.root = this.deleteHelper(this.root, value)
    }

    deleteHelper(root, value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteHelper(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteHelper(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value = this.minValueHelper(root.right)
            root.right = this.deleteHelper(root.right, root.value)
        }
        return root
    }
}

let bst = new BinarySearchTree()


bst.insert(10)
bst.insert(89)
bst.insert(7)
bst.insert(6)
// bst.insert(8)

bst.delete(7)
bst.levelOrder()