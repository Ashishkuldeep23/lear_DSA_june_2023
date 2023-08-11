

// // // Head And Tail recursion and Call Stack in Javascript ------------>


// // // Call stack example (With tail recursion)------>



function d(){
    console.log("d");
}



function c(){
    d()

    console.log("c");
}



function b(){
    c()
    console.log("b");
}


function a(){
    b()
    console.log("a");
}



// // // Call a fn to call rest functions.

// a()




// // // Both Head and Tail recurson example ----------->


function testHeadAndTailRecursions(num){

    console.log(num)    // // // Head Recursion (Becoz i'm doing imp. code on above then calling same it self with different value)
    
    if( num > 0 )  testHeadAndTailRecursions(num-1);
    
    console.log(num)    // // // Tail Recursion (Becoz i'm doing imp. code on below and calling same it self with different value on above.)
}



testHeadAndTailRecursions(3)


