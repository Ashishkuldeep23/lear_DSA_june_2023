
let arr = [9 , 4 ,7 ,5 , 1 ,3 ,2 , 10 , 11 , 8]
let k = 12

// // // Time complexity of below progarm is O(n) 

function findSumOfK(arr , k){

    // console.log(arr , k)
    let objOfDiff = {}      // // // Taking hashMap

    let res = []
    let resIndex = 0

    for(let item of arr){     // // // Loop run over arr
        // console.log(item)

        let diff = k - item     // // // Take difference of k - currentNum  (This will stored in object or hashmap)

        // console.log(diff)
        // console.log(objOfDiff)

        if( objOfDiff[item]){       // // // If currentNum is present in object in then console log the values and return (break loop).

            // // For First pair
            // console.log(`${item} + ${diff} = ${k}`)
            // return [item , diff]

            // // For all Pairs 
            res[resIndex] = [item , diff]
            resIndex++
            
        }


        objOfDiff[diff] = true    // // // Create key with diffrance of k and currentNum , In if condition this is matching.

        // if(objOfDiff[diff]){
        //     console.log(1)
        // }else{
        //     // console.log(2) 
        // }
    }

    return (res.length===0) ? "Not any Pair found" : res




}



// console.log(findSumOfK(arr , k))



// // // Same quetion ------->


// Given an array arr[] of distinct elements size N that is sorted and then rotated around an unknown point, the task is to check if the array has a pair with a given sum X.

// Input: arr[] = {11, 15, 6, 8, 9, 10}, X = 16
// Output: true
// Explanation: There is a pair (6, 10) with sum 16

// Input: arr[] = {11, 15, 26, 38, 9, 10}, X = 35
// Output: true
// Explanation: There is a pair (26, 9) with sum 35


// Input: arr[] = {11, 15, 26, 38, 9, 10}, X = 45
// Output: false
// Explanation: There is no pair with sum 45.





function findPairOfSum (arr , t ){

    let obj = {}

    // // //  [11, 15, 6, 8, 9, 10]
    // // // 16

    for(let i=0 ; i<arr.length ; i++){

        // console.log(i)

        let diff = t - arr[i]

        if (obj[arr[i]]){
            console.log(diff , arr[i])
            console.log(true)
            return
        }

        obj[diff] = true

        // console.log(arr[i])

    }

    console.log(false)

}


let list = [11, 15, 6, 8, 9, 10]
let t = 16


findPairOfSum(list , t)





