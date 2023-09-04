
// // // We should use only one loop


// // // Q :- Calculate sum of zero. (Give indexes)


let arr = [-9 , -4  , -1 , 1 , 4 ,8  , 11]

let left = 0
let right = arr.length-1


let res = []

while(left < right){


    let sum = arr[left]+arr[right]

    // console.log(sum)

    if(sum === 0){

        res.push([arr[left] , arr[right]])

        // console.log(left , right);
        // console.log(arr[left] , arr[right]);
        // break

        left++; right--

    }else if( sum < 0 ){
        left++
    }else{
        right--
    }

}


console.log(res)





