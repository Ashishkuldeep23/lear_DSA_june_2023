// // Find factorial of a number ----------->

// // Mine try -->
function factorial (n){

    // if(n === 0 || n=== 1) return 1
    // // // Above line in no need because i'm runing loop from 1 and my fact value is 1 in starting.

    let fact = 1


    for(let i=2 ; i<=n ; i++){
            
        fact *= i
    }

    return fact

}

let res = factorial(5)
console.log(res)