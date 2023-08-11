



console.log("Going to work with Recursion ---------------->")


// // // // Number to 1 printing (10 to 1). ------------>


function rec1 ( x ){

    if(x === 1){
        return 1
    }

    console.log(x)

    return rec1(x-1)

}


// console.log(rec1(10))



// // // Printing table by recusion method ------>

let i = 1

function rec2(y){

    if(i === 10){
        return y +" X "+ i +" = "+ y*10
    }

    console.log(y +" X "+ i +" = "+ y*i)

    i++

    return rec2(y)

}

// console.log(rec2(56))




// // // Factorial of given number

function rec3(z){

    if(z===0){
        return 1
    }

    return z*rec3(z-1)
}



// console.log(rec3(8))



// // // // Plus till one --------->


function rec4(a){

    if(a === 0){
        return 0
    }
    
    return a + rec4(a-1)
}


// console.log(rec4(3))




function tailRec(x){
    
    if(x > 0){
        tailRec(x-1)
    }
    
    console.log(x)

}

let data = 5
console.log(tailRec(data))
















