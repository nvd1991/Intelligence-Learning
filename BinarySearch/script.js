//Tree constructor
function Tree(){
    this.root = undefined;
    this.appendNode = appendNode;
}

//Append a node to a tree
function appendNode(node){
    if(typeof this.root === 'undefined'){
        this.root = node;
        return;
    }
    this.root.appendChild(node);
}

//Node constructor
function Node(value){
    this.value = value;
    this.rightNode = undefined;
    this.leftNode = undefined;
    this.appendChild = appendChild;
}

//Append a child to a node
function appendChild(node){
    if(this.value > node.value){
        if(typeof this.leftNode === 'undefined'){
            this.leftNode = node;
            return;
        }
        this.leftNode.appendChild(node);
    } else if(this.value < node.value) {
        if(typeof this.rightNode === 'undefined'){
            this.rightNode = node;
            return;
        }
        this.rightNode.appendChild(node);
    }
}

//Create the tree
const tree = new Tree();
tree.appendNode(new Node(10));
tree.appendNode(new Node(14));
tree.appendNode(new Node(16));
tree.appendNode(new Node(11));
tree.appendNode(new Node(7));
tree.appendNode(new Node(12));
tree.appendNode(new Node(3));
tree.appendNode(new Node(9));