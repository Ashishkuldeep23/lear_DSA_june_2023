

// // // Implement Binary Search Tree (BST)


class Node {

    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }

}




class BSTree {

    constructor() {
        this.root = null
    }

    isEmpty() {
        console.log(this.root === null)
        return this.root === null
    }


    printBTS() {
        console.log(JSON.stringify(this.root))
    }


    addNode(val) {
        let newnode = new Node(val)

        // if(this.isEmpty()){
        if (this.root === null) {
            this.root = newnode
        } else {
            this.insertNode(this.root, newnode)
        }

    }


    insertNode(root, node) {

        // console.log(root , node)

        if (root.value > node.value) {
            // root.left = node
            if (root.left === null) {
                root.left = node
            } else {
                let newNode = new Node(node.value)
                // console.log("by ", newNode)
                // console.log( "byyyyy", root.left)

                this.insertNode(root.left, newNode)
            }

        } else {
            if (root.right === null) {
                root.right = node
            } else {
                let newNode = new Node(node.value)
                this.insertNode(root.right, newNode)
            }
        }

    }


    searchNode(root, val) {

        // // // Root object should given becoz in if condition we are going to perform recursion.

        if (root === null) {
            console.log(val + " is not Present")
            return false
        } else if (root.value === val) {
            console.log(root.value + " is Present")
            return true
        } else if (root.value > val) {
            return this.searchNode(root.left, val)
        } else {
            return this.searchNode(root.right, val)
        }

    }


    preOrderTravering(root) {
        // console.log(root)

        // // // In traversing we use only two concepts 1) if root is not null (Root should having something) , 2) Recursion run again the same function with different object.
        // // if(root) then go inside and log the value of root and then 2 recursion
        // // 1st recursion is used with left values , same function run with left object ( if left is over ) 
        // // 2nd recursion is used with right values , call same functin with right object.


        // // // ORDER of traversing is defined by console.log() Where you are puttig log of value.
        // // // if At top (above then both recursions) then first print Root Node then Left Node Then Right Node.
        // // // If At mid (In b/w both recursions) then 


        // console.log(root)


        if (root) {
            this.preOrderTravering(root.left)
            this.preOrderTravering(root.right)
            console.log(root.value)
        }


    }


    inOrderTraversing(root) {
        if (root) {
            this.inOrderTraversing(root.left)
            console.log(root.value)
            this.inOrderTraversing(root.right)
        }
    }


    postOrderTraversing(root) {
        if (root) {
            this.postOrderTraversing(root.left)
            this.postOrderTraversing(root.right)
            console.log(root.value)
        }
    }




    // // // Search Element by Breath First Approch ---->
    // / // Here ww will search element by level basis and print them 
    // // // Means level 0 elements prints first then level 1 , then level 2 , then lvel 3 and so on .....
    // // // Here we uses queue to implemnt this.
    breathFirstSearch() {

        let queue = []

        queue.push(this.root)
        // // // Push root object into queue.

        while (queue.length) {

            // console.log(queue)

            let currentNode = queue.shift()
            // // // shift the object (0th object) , shift becoz FIFO technique used in Queue.

            console.log(currentNode.value)
            // // // And console log the Value of removed elemnt. (Log the value)


            // // // iF LEFT is not null then push into Queue.
            // // // if RIGHT is not null then push into Queue.
            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }


    }



    minValue(root) {
        // console.log('mIN')

        if (root.left) {
            return this.minValue(root.left)
        } else {
            // console.log(root)
            return console.log("Minimum value of this tree is :-", root.value)
        }

    }


    maxValue(root) {
        // console.log('mIN')

        if (!root.right) {
            return console.log("Maximum value of this tree is :-", root.value)
        } else {
            // console.log(root)
            return this.maxValue(root.right)
        }

    }



    removeData(value) {
        let callDelete = this.deleteNode(this.root, value)
        console.log(callDelete)
    }



    deleteNode(root, value) {
        console.log("Delete data in BST is not working now.")

        // console.log(root.value)

        if (root === null) {
            return root;
        } else if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
            return root;
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
            return root;
        } else {

            // console.log(root.value)
            // console.log(root)


            if (!root.left && !root.right) {
                return null;
            } else if (root.left === null) {

                return root.right
            } else if (root.right === null) {

                return root.left
            } else {

                root.value = this.minValue(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }




        }
    }






}



let bst = new BSTree()


// bst.isEmpty()

bst.addNode(20)

bst.addNode(10)

bst.addNode(30)

bst.addNode(28)

bst.addNode(5)

bst.addNode(7)

bst.addNode(11)

bst.addNode(23)

bst.addNode(40)





// console.log(bst.searchNode(bst.root , 90 ))

// bst.isEmpty()

// console.log(JSON.stringify(bst))


// // // Depth First search Traversing in BST ------>
// bst.preOrderTravering(bst.root)
// bst.inOrderTraversing(bst.root)
// bst.postOrderTraversing(bst.root)


// // // Breadth First Search in BST ------>

// bst.breathFirstSearch()

// // //  Min nd Max of Tree --------->

// bst.minValue(bst.root)

// bst.maxValue(bst.root)


// // // Delete node in tree ----------->

bst.deleteNode(bst.root, 30)

bst.printBTS()

// console.log(bst)

