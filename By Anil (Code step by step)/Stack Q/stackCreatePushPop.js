

// // // In This file we are going to do ------->
// // 1. Crate a stack 
// // 2. Define currentSize and max 
// // 3. Peform Push and Pop operations 
// // 4. EXtra


let stack = []

let currentSize = stack.length

const max = 5





function push(newItem){
    
    // // // Validation if stack is already full then don't push any thing ---->
    if(currentSize >= max){
        console.log("Can't push element "+newItem)
        return "Can't push element "+ newItem +" :- By return vlaue" 
    } 

    stack[currentSize] = newItem
    currentSize++
    return stack
    
}



// console.log(push(50))

push(50)
push(30)
push(40)
push(50)
push(60)




function pop(){

    if( currentSize <= 0 ){
        console.log("Can't pop value from empty stack")
        return "Can't pop value from empty stack :- By return value"
    }

    let popedValue = stack[currentSize-1]    // // // Store last element of stack before removing.
    currentSize--
    stack.length = currentSize
    return popedValue + " :- Poped Value"

}


pop()











console.log(stack , currentSize , max)        // // // Here printing new values.
