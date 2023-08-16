

// // // Binary Search Itrative Approch ------------>



let arr = [5, 7, 11, 18, 25, 40, 44, 56, 60, 69, 75, 80]

let start = 0
let end = arr.length - 1

let find = 5;

let at = find + " is not Found in this :- " + arr;

while (start <= end) {

    let midPoint = Math.floor((start + end) / 2)

    // let value = arr[midPoint]

    if (arr[midPoint] === find) {
        at = find + " is present at " + midPoint + " index in :- " + arr;
        break
    } else if (arr[midPoint] > find) {

        end = midPoint - 1

        // // // If mid value is less then find element.
        // // // Means run a loop from 0 to mid value of arr
        // // // That's why changing end from arr.lenth to mid value of arr (on 1st itration.)
    }
    else if (arr[midPoint] < find) {

        start = midPoint + 1

        // // // If mid value of arr is less then find element 
        // // // Means to run a loop from mid to end 
        // // // That's why cahnging start value from 0 to mid + 1 (on 1st itration).

    }


}



console.log(at)






// // // Prectice --------->

let data = [18, 25, 40, 44, 56, 60, 69, 75, 80]

let f = 18

let positon = f + " Not found in this arr :- " + data

function binarySearchByRec(arr, s, e) {

    let m = Math.floor((s + e) / 2)

    let value = arr[m]

    // // // This if condition is used to break the loop of recursion (when start is more then end means , fuction have nothing to search more.)
    if (s > e ) {
        return positon
    }


    // // // This if codition is used to print data or position of array if get right(if mid value is equal to find value.)
    if (arr[m] === f) {
        positon = f + " is present at " + m + " index in :- " + arr
        return true
    }

    // // // Below these two conditions will set the start value and end value.
    // // 1st) if my mid value is greater then find value means i need to change my end value (by mid - 1) and my start value is going to same for this condition.
    else if (arr[m] > f) {
        binarySearchByRec(arr, s, m - 1)
    }
    // // 2nd) if my mid value is lesser then find value then we need to change my start value (by mid + 1) (why with mid + 1 becoz i checked my find value is not present left hand side of arr then we need to search ferthur in right hand side) end value and arr is going to same
    else {
        binarySearchByRec(arr, m + 1, e)
    }
}


binarySearchByRec(data, 0, data.length - 1)


console.log(positon)