
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class bst {
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

    largest(root){
        if(!root.right) return root.value
        return this.largest(root.right)
    }

    findSecondLargest(){
        if(this.isEmpty() || (!this.root.left && !this.root.right)) {
            throw new Error('Tree must have atleast two nodes')
        }
        return this._findSecondLargest(this.root, null)
    }

    _findSecondLargest(root, parent){
        if(root.right){
            return this._findSecondLargest(root.right, root)
        }

        if(root.left){
            return this.largest(root.left)
        }

        return parent.value
    }

    // find third largest 

    // findTirdLargest(){
    //     if(this.isEmpty() || (!this.root.left || !this.root.right)){
    //         throw new Error('Tree must have atleast tree nodes')
    //     }
    //     return this._findTirdLargest(this.root, null, null)
    // }

    // _findTirdLargest(root, parent, grandParent){
    //     if(root.right){
    //         return this._findTirdLargest(root.right, root, parent)
    //     }

    //     if(parent.left){
    //         return this.largest(parent.left)
    //     }

    //     return grandParent.value

    // }

}

const tree = new bst();


tree.insert(10);
tree.insert(5);
tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(18);
// tree.insert(11);
// tree.insert(17)

console.log(tree.findSecondLargest())

