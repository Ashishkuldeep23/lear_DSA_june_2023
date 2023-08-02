

// // // Problem :- Merge two array in third array (1st & 2nd arr have items by 3rd is empty) ---------->
// // // By for loop (Simplest way)




let arr1 = ["😊" , "😂", "🥲" , "🤣" ,"😔" ,"😒", "😎" ];
let arr2 = [10 , 20 , 30 , 40 , 50];
let arr3 = []

console.log("<------------------------------------------------------->")


for(let i=0 ; i<arr1.length ; i++){

    // console.log(arr3.length)


    arr3[arr3.length] = arr1[i]

    
    // // // Here you can do =>
    // // arr3[i] = arr2[i]

}

// console.log("------------------------")


for(let i=0 ; i<arr2.length ; i++){

    // console.log(arr3.length)


    arr3[arr3.length] = arr2[i]

    // // // Here you can do =>
    // // arr3[arr1.length + i] = arr2[i]

}


// // // arr3[arr3.length] = arrayOfRuningLoop[i]
// // // My idea worked 😊😊😊😊😊

console.log("[By (two for loops)] ===>>")

console.log(arr3)

console.log("<------------------------------------------------------->")

console.log("[By (rest) operator] ===>>")

console.log([...arr1 , ...arr2])


console.log("<------------------------------------------------------->")

console.log("[By (concat())function of arr] ===>>")

arr3.concat(arr1 , arr3)
console.log(arr3)


console.log("<------------------------------------------------------->")