// // // Implement Queue with Class.
// // 1) Creating Queue by class of js.
// // 2) Main functions are created like add item , remove item , display queue.
// // 3) Reverse String by the help of Queue.

class Queue{

    data = [];
    currentSize;
    maxSize;

    constructor(max = 5){

        this.currentSize = this.data.length
        this.maxSize = max

        // console.log("Queue creating")
    }


    enqueue(newEle){

        if(this.currentSize >= this.maxSize) return console.log("Queue is already full. Can't add Element :- " + newEle)

        this.data[this.currentSize] = newEle
        this.currentSize++
    }


    dequeue(){

        if(this.currentSize <= 0) return console.log("Queue is Empty. Can't remove Element.")

        let removed = this.data[0]

        for(let i=0 ; i<this.data.length ; i++){
            this.data[i] = this.data[i+1]
        }

        this.currentSize--;
        this.data.length = this.currentSize

        return removed

    }



    // // // Reverse a string by queue ----->
    // // // Run a loop 0 to length of string and add one by one element i queue.
    // // // Run another loop from length of str to 0 (reverse) and remove element and update value of arr[i] with removed element , one by one.
    // // // By this logic i can reverse a str in Queue Data Structure.

    reverseStr(str){

        // console.log(str)

        let arr = str.split("")

        this.maxSize = arr.length
        this.data = []

        for(let i=0 ; i<arr.length ; i++){
            this.enqueue(arr[i])
        }

        for(let i=arr.length-1 ; i>=0 ; i--){
            arr[i] = this.dequeue()
        }


        // console.log(arr , str)

        return arr.join("")


    }




    display(){
        console.log(this.data)
    }




}



let qu1 = new Queue

// qu1.enqueue(50)
// qu1.enqueue(500)
// qu1.enqueue(500500)
// qu1.enqueue(100)

// qu1.dequeue()
// qu1.dequeue()
// qu1.dequeue()



console.log(qu1.reverseStr("Ashish"))




qu1.display()





