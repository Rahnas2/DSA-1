class Node{
    constructor(value){
        this.value = value
        this.childrens = []
    }
}

class RegularTree{
    constructor(n){
        this.root = null
        this.n = n
    }

    isEmpty(){
        return this.root === null
    }

    insertLevelOrder(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.root = node
            return
        }

        let queue = [this.root]
        while(queue.length > 0){
            let currNode = queue.shift()

            if(currNode.childrens.length < this.n){
                currNode.childrens.push(node)
                return 
            }

            for(let child of currNode.childrens){
                queue.push(child)
            }
        }
    }

    levleOrderTraversal(){
        if(this.isEmpty()){
            console.log('tree is empty')
            return
        }

        let queue = [this.root]
        while(queue.length > 0){
            let node = queue.shift()
            process.stdout.write(node.value + ' ')
            for(let child of node.childrens){
                queue.push(child)
            }
        }
        console.log()  // for new line
    }

    getHeight(){
        if(this.isEmpty()) return null
        return this.calculateHeight(this.root)
    }

    calculateHeight(root){
        if(!root) return -1
        let maxHeight = -1
        for(let child of root.childrens){
            maxHeight = Math.max(maxHeight, this.calculateHeight(child))
        }
        return 1 + maxHeight
    }

    getNodeCount(){
        if(this.isEmpty()) return 0
        return this.getNodeCountHelper(this.root)
    }

    getNodeCountHelper(root){
        if(!root){
            return 0
        }
        let count = 1
        for(let child of root.childrens){
            count += this.getNodeCountHelper(child)
        }
        return count
    }


}


const tree = new RegularTree(3)

tree.insertLevelOrder(10)
tree.insertLevelOrder(20)
tree.insertLevelOrder(49)
tree.insertLevelOrder(12)
tree.insertLevelOrder(90)
tree.insertLevelOrder(34)
tree.insertLevelOrder(23)

tree.levleOrderTraversal()

console.log(tree.getHeight())

console.log(tree.getNodeCount())