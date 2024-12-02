class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binaryTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insertLevelOrder(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
            return
        }
        this.insertLevelOrderHelper(this.root, node)
    }

    insertLevelOrderHelper(root,node){
        let queue = [root]

       while(queue.length > 0){
        let removedNode = queue.shift()

        if(!removedNode.left){
            removedNode.left = node
            return
        }else{
            queue.push(removedNode.left)
        }

        if(!removedNode.right){
            removedNode.right = node
            return
        }else{
            queue.push(removedNode.right)
        }
       }

    }

    levelOrderTraversal(){
        if(this.isEmpty()){
            return null
        }
        this.levelOrderTraversalHelper(this.root)
    }

    levelOrderTraversalHelper(root){
        if(!root){
            return
        }
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

    getHeight(){
        if(this.isEmpty()) return null
        return this.calculateHeight(this.root)
    }

    calculateHeight(root){
        if(!root){
            return 0
        }
        return 1 + Math.max(this.calculateHeight(root.left),this.calculateHeight(root.right))
        
    }
    //Time complexity : O(n) , where n is the number of nodes
    //space complexity : O(h) recursion stack depth is atmost the hight of the tree


    calculateDepth(root, target, depth = 0){
        if(root === null) return -1

        if(root.value === target){
            return depth
        }

        let leftDepth  = this.calculateDepth(root.left, target, depth+1)
        if(leftDepth !== -1){
            return leftDepth
        }

        return this.calculateDepth(root.right, target, depth+1)
    }
    //Time Complexity : O(n), where n is the number of nodes
    //Space Complexity : O(h), where h is the hight of the tree due to recursion stack 

    nodesCound(){
        if(this.isEmpty()){
            return null
        }
        return this.calculateNodes(this.root)
    }

    calculateNodes(root){
        if(!root){
            return 0
        }
        return 1 + this.calculateNodes(root.left) + this.calculateNodes(root.right)
    }

    //Time complexity : O(n) , where n is the number of nodes
    //space complexity : O(h) recursion stack depth is atmost the hight of the tree
}


let bt = new binaryTree()
bt.insertLevelOrder(6)
bt.insertLevelOrder(34)
bt.insertLevelOrder(12)
bt.insertLevelOrder(90)
bt.insertLevelOrder(23)
bt.insertLevelOrder(15)
bt.insertLevelOrder(78)
bt.insertLevelOrder(45)

bt.levelOrderTraversal()

console.log()

console.log(bt.getHeight())


console.log('depth of the node',bt.calculateDepth(bt.root,23))

console.log(bt.nodesCound())