

// // // Implementing Stack with class 
// // Create all basic function like push() pop() display() top()
// // class name should start with capital letter.
// // Don't use keywords in class like :- var , let , const or function. 


let Stack = class{

    // // // Variables without any keyword.
    data = []
    currentSize;
    max;


    constructor( maxValue = 5 , printTxt = "Text is not given as 2nd argument when instance is created."){
        // console.log("Called by constructor of Stack once instance created")

        
        this.currentSize = this.data.length
        this.max = maxValue

        // // // Below console.log() run very first when new instance is created.
        // console.log(this.max)
        // console.log(printTxt)

    }


    // // // Function without function keyword

    push(newEle){

        if(this.currentSize >= this.max){
            return console.log("Stack is already full can't push :- "+newEle)
        }


        this.data[this.currentSize] = newEle
        this.currentSize++

    }


    pop(){

        if(this.currentSize <= 0){
            console.log("Stack is already full")
            return
        }

        let last = this.data[this.currentSize-1]

        this.currentSize -= 1
        this.data.length = this.currentSize

        return last

    }

    display(){
        console.log(this.data)
    }

    top(){
       if(this.currentSize !== 0) console.log(this.data[this.currentSize-1])
       else{ console.log("Stack is Empty , Can' display Top Element.") }
    }


    reverseStr(str){

        // console.log(str)

        // // // make data (out stack) Empty before doing something

        this.data.length = 0   // // // Make Stack Empty
        this.max = str.length  // // // Update max value

        let arr = str.split("")    // // // make arr from str.

        for(let i=0 ; i<arr.length ; i++){
            this.push(arr[i])
        }

        for(let i=0 ; i<arr.length ; i++){
           arr[i] = this.pop()
        }


        str = arr.join("")   // // // join arr again 
        return str
    }






}



let st1 = new Stack(5 )


// st1.top()

console.log(st1.reverseStr("Ashish"))

st1.display()



// let st2 = new Stack    // // Directly created instance.




