
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

    isSubset(subTree){
        return this._isSubset(this.root, subTree)
    }

    _isSubset(maintree, subTree){
        if(!subTree) return true
        if(!maintree) return false

        if(this.isIdentical(maintree, subTree)) return true

        return this._isSubset(maintree.left, subTree) || this._isSubset(maintree.right, subTree)
    }

    isIdentical(maintree, subTree){
        if(!maintree && !subTree) return true
        if(!maintree || !subTree) return false
        if(maintree.value !== subTree.value) return false

        return this.isIdentical(maintree.left, subTree.left) && this.isIdentical(maintree.right, subTree.right)
    }
}

const maintree = new bst()
maintree.insert(10);
maintree.insert(5);
maintree.insert(15);
maintree.insert(3);
maintree.insert(7);
maintree.insert(12);
maintree.insert(18);
maintree.insert(11);

const subTree = new bst()
subTree.insert(5)
subTree.insert(3)
subTree.insert(7)

console.log(maintree.isSubset(subTree.root))