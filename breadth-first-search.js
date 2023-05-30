class Node{
    constructor(value){
        this.value = value
        this.right = null;
        this.left = null;
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
        const newnode = new Node(value)
        if(this.isEmpty()){
            this.root = newnode
        }else{
            this.insertnode(this.root,newnode)
        }
    }
    insertnode(root,newnode){
        if(newnode.value < root.value){
            if(root.left === null){
                root.left = newnode
            }else{
                this.insertnode(root.left,newnode)
            }
        }else{
            if(root.right === null){
                root.right = newnode
            }else{
                this.insertnode(root.right , newnode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left ,value)
            }else{
                return this.search(root.right ,value)
            }
        }
    }

    levelOrder(){
        // use queue with node in later
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}

const bst = new BinarySearchTree()

console.log('tree is empty?',bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,5));
console.log(bst.search(bst.root,15));
console.log(bst.search(bst.root,20));

bst.levelOrder()
