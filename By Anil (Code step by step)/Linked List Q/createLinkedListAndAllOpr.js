

// // // Create linked list and insert new nodes in that.


// // By Class and Objects :-


class Linked_List {

    constructor(newValue) {

        // console.log(newValue)

        this.head = {
            value: newValue,
            next: null
        }

        this.tail = this.head

        this.size = 1   // // // Make new key that tells size of linked list

    }



    printLinkedList() {
        // console.log(this.head)       // // // Print only head
        console.log({ head: JSON.stringify(this.head), tail: this.tail, size: this.size })           // // // Print full list
    }


    appendNewValue(newerValue) {

        let newObj = {
            value: newerValue,
            next: null
        }


        this.tail.next = newObj
        this.tail = newObj

        this.size++        // // // Increase size by one on every append value.
    }



    traverseList() {

        let counter = 1
        let cNode = this.head

        while (counter < this.size) {

            // console.log(cNode)   // // // Full node till last node

            console.log(cNode.value)

            cNode = cNode.next

            counter++
        }

    }


    traverseAndUpdate(index, newValue) {

        // console.log("Ak")

        // console.log(index , this.size)
        if ((index <= 0) || (index > this.size)) {
            return console.log(`This index number (${index}) is more then size (${this.size}) of list.`)
        }

        let counter = 1;

        let currentNode = this.head

        while (counter <= this.size) {

            if (counter === index) {
                currentNode.value = newValue
            }

            // console.log(currentNode)  // // // Full node 
            console.log(currentNode.value)  // // // only value
            currentNode = currentNode.next

            counter++
        }

    }


    removeNode(index) {

        let counter = 1
        let leadNode = this.head


        if (index == 1) {
            this.head = this.head.next
        } else {

            while (counter < index - 1) {
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



    insertNode(index, value) {

        // console.log(index , value , this.size)

        let counter = 1;
        let currentNode = this.head;

        if ((index <= 0) || (index > this.size + 1)) {
            return console.log(`Can't insert at this ${index} index list have only ${this.size} elements`)
        }



        if (index === 1) {
            this.head = {
                value: value,
                next: currentNode
            }
        }



        while (counter < index - 1) {
            // console.log(currentNode.value)
            currentNode = currentNode.next;
            counter++
        }

        // console.log(currentNode.value)
        // console.log(currentNode)

        let nextNode = currentNode.next;

        currentNode.next = {
            value: value,
            next: nextNode
        }

        this.size++
    }


    insertNodeOwn(index, value) {

        // console.log(index , value)

        if (index < 0 || index > this.size) {
            return console.log("Shi input to do")
        }



        if (index === 1) {
            this.head = {
                value: value,
                next: currentNode
            }
        } else {

            let currentNode = this.head
            let c = 1

            while (c < index - 1) {
                // console.log(currentNode.value)
                currentNode = currentNode.next
                c++
            }

            let storeNode = currentNode.next

            currentNode.next = {
                value: value,
                next: storeNode
            }
        }

        this.size++;
        // console.log(currentNode)
    }


    insertNodeThird(at, val) {
        // console.log(at, val)

        // // // A validation givn index is good to go or not
        // // // In last condition checking this this.size + 1 , becoz after inserting size of list will increase by 1 , means user can insert at last also.
        if (at < 1 || at > this.size + 1) {
            console.log(`can't insert at ${at}`)
            return `can't insert at ${at}`
        }




        // // // if gven index in one then different logic
        if (at === 1) {
            let nextNode = this.head
            this.head = {
                value: val,
                next: nextNode
            }
            // // // Increase size by one (item inserted successfully) at first index also.
            this.size++
            return `Item inserted at ${at}`
        }



        let loop = 1
        let currentNode = this.head
        while (loop < at - 1) {
            // console.log(loop)
            currentNode = currentNode.next
            loop++
        }

        // console.log(currentNode)

        let nextNode = currentNode.next

        currentNode.next = {
            value: val,
            next: nextNode
        }

        // // // Increase size by one (item inserted successfully)
        this.size++

        return `Item inserted at ${at}`

    }


    searchVlaueByValue(data) {

        let result = "Not Found";
        let leadNode = this.head;
        let loop = true;

        while (loop) {
            // console.log("Okqq")

            leadNode = leadNode.next;

            loop = !!leadNode

            // // // use Above or Below

            // if(leadNode.next === null){
            //     break
            // }

            if (loop && leadNode.value === data) {
                loop = false
                result = leadNode
                console.log(leadNode.value)
            }

        }


        console.log(result)


    }



    searchVlaueByElement(ele) {

        if (ele < 0 || ele > this.size) {
            return console.log("Given element is not b/w Linked list size.")
        }

        let result = "Not Found"

        let counter = 1
        let currentNode = this.head

        while (counter <= this.size) {

            if (counter === ele) {
                console.log(currentNode.value)
                result = currentNode
                break
            }

            currentNode = currentNode.next
            counter++
        }

        console.log(result)



    }



    searchNodeSecondByValue(data) {

        let result = `${data} Not Found , In this Linked list ${JSON.stringify(this.head)}`

        let leadNode = this.head

        let loop = true

        while (loop) {



            if (loop && leadNode.value === data) {
                result = `Value found :- ${JSON.stringify(leadNode.value)}, In this Linked list ${JSON.stringify(this.head)}`
                loop = false
            }


            leadNode = leadNode.next
            loop = !!leadNode   // // // This is checks value is turthy or value is falsy.
            // // // Above line explanation. => (HOW :- if next is actual object then object get converted into false by fisrt ! and ferther converted into true by secod ! BUTTTTTTTT  if next === null then first time converted into true by first ! and then converted into flase again by second !.) (This is logic behind this line.)

            // // // OR
            // loop = leadNode

            // // // above line also works based on falsy and truthy value of JavaScript.(Object is Truthy value but null is falsy value.)


        }

        console.log(result)

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


// myList.searchVlaueByValue(11000)

// myList.insertNodeThird(5, 50000)


myList.searchNodeSecondByValue(50)




// myList.traverseAndUpdate(7, 1000)        // // // Travers the linked list and update the value.

// myList.printLinkedList()

// myList.removeNode(3)

// myList.insertNode( 5 , 33333)

// myList.insertNodeOwn(10, 444444)


// myList.searchVlaueByElement(2)

// myList.traverseList()

myList.printLinkedList()

// console.log(myList)



