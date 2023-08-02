// // Calculate given a number is prime or not ------------>


function prime(n){
    let product = 0

    for(let i =1 ; i<=n ; i++){
        if(n%i === 0){
            product++
        }
    }
    return (product === 2 ) ? true : false

}

let num = 28
console.log(`${num} is prime number :- `  + prime(num))





// // // Second approch by video ------------>

function isPrime(n){

    if(n === 1 || n === 2){
        return false
    }

    for(let i=2 ; i<n ; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

let num2 = 13
console.log(`${num2} is prime number :- `  + isPrime(num2))










// // // Write all prime numbers till 20 or given n 

function allPrime(n){
    let arr = []

    if(n === 0 || n === 1) return [1]

    for(let i=1 ; i<=n ; i++){
        if(prime(i)){
            arr.push(i)
        }
    }
    return arr
}

let res = 19
console.log(`Give all prime number b/t 1 to ${res} :- ` + allPrime(res))



// // // Time complexity of --->

// // prime() function is linner (only one loop)
// // allPrime() function is qutiratic (nested loop)





// // // // New code by video =======================================================================>

// // // Big-O of below function is :- Linner [ O(n) ]

function checkPrime(n){

    if(n<2){
        return false

    }

    for(let i=2 ; i<n ; i++){
        if(n%i === 0){
            return false
        }
    }


    return true
}





// // // ShortForm of above code acc to line if exicute.

// // // Big-O of below function is :- Linner [ O(sqrt(n)) ]


function shortCheckPrime(n){

    if(n<2){
        return false
    }

    for(let i=2 ; i<Math.sqrt(n) ; i++){
        if(n%i === 0){
            return false
        }
    }


    return true
}


console.log(checkPrime(21) , shortCheckPrime(21))
console.log(checkPrime(7) , shortCheckPrime(7))
console.log(checkPrime(10) , shortCheckPrime(10) )
console.log(checkPrime(18) , shortCheckPrime(18))
console.log(checkPrime(23) , shortCheckPrime(23))
console.log(checkPrime(5) , shortCheckPrime(5))
console.log(checkPrime(19) , shortCheckPrime(19))



