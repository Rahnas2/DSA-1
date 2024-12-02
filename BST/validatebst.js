class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function isBST(tree){
    return _isBST(tree, -Infinity, Infinity)
}

function _isBST(tree, min, max){
    if(!tree) return true

    if(tree.value <= min || tree.value >= max) return false

    return _isBST(tree.left, min, tree.value) && _isBST(tree.right, tree.value, max)
}

let tree = new Node(78)
tree.left = new Node(76)
tree.right = new Node(79)

console.log(isBST(tree))