

// // // // Problem is ----------------------->
// // // Insert New Element in Arr ---->





// // We will run loop from End and (if index >= at)[index is bigger or equal to postion]{increase index by one and put same element} & (if i === at){insert newEl}


function insertNewElAtBy(arr , at , newEl){

    // // // Some validation here  -------------->

    if( at > arr.length){
        return `Invalid , can't insert at :- ${at} possition because array length is only  :- ${arr.length}.`
    }


    if( typeof newEl !== "number" ){
        return `Insert element should be number only. This :- (${newEl}) is not valid value.`
    }




    for (let i = arr.length - 1; i >= 0; i--) {

        // console.log(arr[i])

        if (i >= at) {
            arr[i + 1] = arr[i]

            if (i === at) {
                arr[i] = newEl
            }
    
        }
    
    }


    return arr
    
}

const arr = [60, 70, 5, 2, 4]
const at = 3
const newEl = 10



console.log(insertNewElAtBy(arr, at , newEl))       // // // 100% working --->





