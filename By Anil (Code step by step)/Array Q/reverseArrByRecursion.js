

// // // Reverse an array by recursion -------------->


let arr = [100, 10, 50, 60, 70, 0]

let temp;

function reversArrByRecursion(arr, start, end) {

    // console.log(arr)   // // Showing log value of arr on every fn call

    if (start <= end) {

        // // // Switching value of start and end
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        // // // Calling own function to create a recursion
        // // // pre increment and pre decrement doing because i want reflec value in same line , not in next line
        reversArrByRecursion(arr, ++start, --end)
    }

}


reversArrByRecursion(arr, 0, arr.length - 1)   // // Calling reverse fn with actual values


// console.log(arr)
console.log("Array reverse by Recusion ------------>", arr)





let arr2 = [100, 10, 50, 60, 70, 0]

// console.log(arr2.reverse())     // // // This is inbuild method for reverse arr.
console.log("Array reverse by inBuild fn ------------>" , arr2.reverse())






