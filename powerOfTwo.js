// // // Calculate is given number is power of two or not



// // // Below fn is mine ------->
function powerOfTwo(n){

    if( n!==1 && n%2 === 1){
        return false
    }

    let arr = []

    for(let i=0 ; i<=n ; i++){
        arr.push( 2 ** i )
    }

    return arr.includes(n)

}


// console.log(powerOfTwo(1))
// console.log(powerOfTwo(10))
// console.log(powerOfTwo(8))
// console.log(powerOfTwo(20))
// console.log(powerOfTwo(16))
// console.log(powerOfTwo(512))
// console.log(powerOfTwo(1000))



// // // Solution by Video -------------------------------->

// // So in video tuter method ----->

// // ex=> n = 8 and n = 5 

// // // So we will apply divide method on number like 

// //  8/2 = 4  or 8%2 === 0
// // 4/2  = 2  or 4%2 === 0
// // 2/2 = 1  or 2%2 === 0

// // // For 5 ------------------>
// // 5/2 = 2.5 or 5%2 === 1   (false break)


// // so in simple words we can say that if n mod 2 , and getting 0 then ok we will check for n/2 in next step but else we get other then 0 means false (number is not Power of two)


function isPowerOfTwo(n){

    if(n < 1){
        return false
    }

    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        
        n = n/2
    }

    return true

}



console.log(powerOfTwo(1)  , isPowerOfTwo(1))
console.log(powerOfTwo(10 ), isPowerOfTwo(10))
console.log(powerOfTwo(8)  , isPowerOfTwo(8))
console.log(powerOfTwo(20),isPowerOfTwo(20))
console.log(powerOfTwo(16),isPowerOfTwo(16))
console.log(powerOfTwo(512) , isPowerOfTwo(512))
console.log(powerOfTwo(1000), isPowerOfTwo(1000))

