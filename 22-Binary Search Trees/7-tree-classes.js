
class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

var tree = new BinarySearchTree();
console.log(tree);
tree.root = new Node(10);
console.log(tree);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
console.log(tree);
tree.root.left.right = new Node(9);
console.log(tree);
