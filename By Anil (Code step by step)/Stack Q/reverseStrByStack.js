


let data = []
let currentSize = data.length


function push(newValue){

    data[currentSize] = newValue
    currentSize++


}


function pop(){

    let lastEle = data[currentSize-1]


    // // // remove last element --->    
    currentSize -= 1
    data.length = currentSize


    return lastEle

}


// push(20)
// push(25)
// push(30)
// pop()
// pop()


function reverseStr(arrOfStr){
    // console.log(arrOfStr);

    for(let i=0 ; i<arrOfStr.length ; i++){
        push(arrOfStr[i])
    }

    for(let i=0 ; i<arrOfStr.length ; i++){

       arrOfStr[i] =  pop()

    }


}




let str = 'Ashish'

str = str.split("")     // // // make arr of a string with all characters present in string.
reverseStr(str)     // // // arr of string get converted by i want in str form.



str = str.join("")      // // // Make string from arr by join function.

console.log("Reversed value is :- "+str)


// console.log("My Stack is =>" , data )    // // // Stack is empty again because pushed one by one and poped one by one.










// // // Test function we are changing parameter value inside function that is possible only in array and object.
// // // Actual value will only changed in Array and Object.


// // // Here in test value of a not changed becoz a is string ------>
function test(str){

    str = "Ashish"
    console.log(str)

}

let a = "ak"
test(a)
console.log(a)




// // // Here Arr value get changes from inside of function ------>

function test2(arr){
    arr[0] = "NewVal"
}

let arr = ["Ashish"]
test2(arr)
console.log(arr)



// // //  Here object value get changes from inside of function ------>
function test3(obj){
    obj.name = "Kuldeep"
    obj.lastName = "Kuldeep"
}

let obj = { name : "Ashish" }
test3(obj)
console.log(obj)




// // // Let's try with function ( Not getting anything to do :-:-:-:-:-:-: ) ------>

function test4(func){
    console.log(func)
}

let func = () => {}
test4(func)




