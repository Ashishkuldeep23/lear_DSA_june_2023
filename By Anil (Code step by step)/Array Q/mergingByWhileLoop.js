
// // // Merge two arr by while loop -------->
// // // Both input arr in sorted ---------->


let arr1 = [3, 6, 9, 12, 15, 18, 21]
let arr2 = [2, 4, 8]
let arr3 = []


let a1 = 0, a2 = 0, a3 = 0;


while (a1 < arr1.length && a2 < arr2.length) {

    if (arr1[a1] < arr2[a2]) {
        arr3[a3] = arr1[a1]
        a1++
    } else {
        arr3[a3] = arr2[a2]
        a2++
    }

    a3++

    // console.log(arr3)

}

// console.log(arr3)


if(arr1.length > arr2.length){

    // console.log(arr3)
    while(a1 < arr1.length){
        arr3[a3] = arr1[a1]
        a1++
        a3++
    }

}else{
    while(a2 < arr2.length){
        arr3[a3] = arr2[a2]
        a2++
        a3++
    }
}


// console.log(arr3)
// console.log(a1 , a2 , a3 , arr1.length , arr2.length , arr3.length)



// while (a1 < arr1.length) {
//     arr3[a3] = arr1[a1]
//     // console.log(arr3)
//     a1++
//     a3++
// }







console.log(arr3)


