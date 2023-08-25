

// // // Create linked list and insert new nodes in that.


// // By Class and Objects :-


class Linked_List{

    constructor (newValue){

        // console.log(newValue)

        this.head = {
            value : newValue,
            next : null
        }

        this.tail = this.head

        this.size = 1   // // // Make new key that tells size of linked list

    }



    printLinkedList(){
        // console.log(this.head)       // // // Print only head
        console.log({ head : JSON.stringify(this.head) ,  tail :  this.tail , size :  this.size })           // // // Print full list
    }


    appendNewValue(newerValue){

        let newObj = {
            value : newerValue ,
            next : null
        }   

        
        this.tail.next = newObj
        this.tail = newObj

        this.size++        // // // Increase size by one on every append value.
    }



    traverseList(){

        let counter = 1
        let cNode = this.head

        while (counter < this.size){

            // console.log(cNode)   // // // Full node till last node
            
            console.log(cNode.value)

            cNode = cNode.next

            counter++
        }

    }





    traverseAndUpdate( index , newValue){

        // console.log("Ak")

        // console.log(index , this.size)
        if( (index <= 0)  || (index > this.size) ){
            return console.log(`This index number (${index}) is more then size (${this.size}) of list.`)
        }

        let counter = 1;

        let currentNode = this.head

        while(counter <= this.size){

            if(counter === index){
                currentNode.value = newValue
            }

            // console.log(currentNode)  // // // Full node 
            console.log(currentNode.value)  // // // only value
            currentNode = currentNode.next

            counter++
        }

    }



    removeNode(index){

        let counter = 1
        let leadNode = this.head


        if(index == 1){
            this.head = this.head.next
        }else{

            while(counter < index-1){
                // console.log(leadNode)
                // console.log(leadNode.value)
                // console.log(counter , index)
                
                leadNode = leadNode.next
                counter++
            }

            let nextNode = leadNode.next.next;
            leadNode.next = nextNode;
        }
        
        this.size -= 1
    }



    insertNode(index , value){

        // console.log(index , value , this.size)

        let counter = 1;
        let currentNode = this.head;

        if( (index <= 0) || (index > this.size+1)){
           return console.log(`Can't insert at this ${index} index list have only ${this.size} elements`)
        }



        if(index === 1){
            this.head = {
                value : value ,
                next : currentNode
            }
        }



        while(counter < index - 1){
            // console.log(currentNode.value)
            currentNode = currentNode.next;
            counter++
        }

        // console.log(currentNode.value)
        // console.log(currentNode)

        let nextNode = currentNode.next;

        currentNode.next = {
            value : value ,
            next : nextNode
        }

        this.size++
    }





}

let myList = new Linked_List(50)
// myList.printHead()
myList.appendNewValue(60)
myList.appendNewValue(70)
myList.appendNewValue(80)
// myList.appendNewValue(90)
// myList.appendNewValue(110)
// myList.appendNewValue(120)
// myList.appendNewValue(130)
// myList.appendNewValue(140)
// myList.appendNewValue(150)



// myList.traverseAndUpdate(7, 1000)        // // // Travers the linked list and update the value.

// myList.printLinkedList()

// myList.removeNode(3)

myList.insertNode( 5 , 33333)

// myList.traverseList()

myList.printLinkedList()

// console.log(myList)



