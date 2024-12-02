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

    getHeight(){
        if(this.isEmpty()){
            return null
        }
        return this.calculateHeight(this.root)
    }

    calculateHeight(root){
        if(!root) return -1
        return Math.max(this.calculateHeight(root.left), this.calculateHeight(root.right)) + 1
    }
    
    isFullTree(node = this.root){
        if(!node) return true
        if(!node.left && !node.right) return true
        if(node.left && node.right){
            return this.isFullTree(node.left) && this.isFullTree(node.right)
        }

        return false
    }

    isCompleteTree(){
        let queue = [this.root]
        let FountFirstIncomplete = false
        while(queue.length > 0){
            let node = queue.shift()
            if(node){
                if(FountFirstIncomplete) return false
                queue.push(node.left)
                queue.push(node.right)
            }else{
               FountFirstIncomplete = true 
            }
        }
        return true
    }

    isPerfect(){
        let height = this.calculateHeight(this.root)
        return this.perfectCheck(this.root, 0 , height)
    }

    perfectCheck(root, currentLevel, height){
        if(!root) return true
        if(!root.left && !root.right){
            return currentLevel === height
        }
        if(root.left && root.right){
            return this.perfectCheck(root.left, currentLevel + 1, height) &&
            this.perfectCheck(root.right, currentLevel + 1, height)

        }
        return false
    }
}

const tree = new binaryTree()
tree.root = new Node(12)
tree.root.left = new Node(90)
tree.root.right = new Node(67)
tree.root.left.left = new Node(90)
tree.root.left.right = new Node(89)
tree.root.right.left = new Node(67)
tree.root.right.right = new Node(89)
// tree.root.left.left.left = new Node(34)

console.log('height : ',tree.getHeight())

console.log('is perfect : ',tree.isPerfect())
console.log(tree.isFullTree())
console.log('is complete tree:',tree.isCompleteTree())

