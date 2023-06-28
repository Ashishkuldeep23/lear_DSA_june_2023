
// // // Fibonacco sequnce -------------------->

// // A fibonacci sequnce is plus of last two digits ->

// // Ex => 0,1,1,2,3,5,8,13,21


// // // First aproch --------------->

function fibonacci(n) {

    // let n = 10

    let fab = [0, 1]

    for (let i = 2; i < n; i++) {

        // console.log(fab)

        fab[i] = fab[i - 1] + fab[i - 2]   // // This is main formula for fibonacci series


        // // Acc. to this formula is , we are doing some things --->
        // // 1) Adding last two numbers from the array
        // // 2) After adding making new element at i position , so by this way we don't need to push an element in the arr.
        // // Second step we can do like ---------> {let add = fab[i-1] + fab[i-2];  fab[i] = add}


    }

    return fab


}


let result = fibonacci(10)


console.log(result)



// // // Second Approch ----------------->

let first = 0
let second = 1

let next = 0

let till = 10

for(let i=1 ; i< till ; i++){

    console.log(next)

    next = first + second

    first = second
    second = next

}









