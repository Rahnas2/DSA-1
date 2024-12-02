
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
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

    closest(target){
        if(this.isEmpty()) return null
        return this.closestHelper(this.root, target, Infinity)
    }

    closestHelper(root, target, closest){
        if(!root) return closest

        if(Math.abs(target - closest) > Math.abs(target - root.value)){
            closest = root.value
        }    

        if(target < root.value){
            return this.closestHelper(root.left, target, closest)
        }else if(target > root.value){
            return this.closestHelper(root.right, target, closest)
        }else{
            return closest
        }
    }
}

const tree = new BST();


tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
tree.insert(11);

console.log('closest: ',tree.closest(4))

console.log('closest 14 : ',tree.closest(14))

console.log('closest 15 : ',tree.closest(15))

console.log('closest of 0: ',tree.closest(0))