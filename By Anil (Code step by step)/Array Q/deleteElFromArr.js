
// // // Delete One element frm an array ---------->



function deleteElFromArr(byInbuild, arr, at) {

    let removedEl = arr[at]

    // // // Some validations are --------->>
    if (at > arr.length || at < 0) return `Can't remover at (${at}) index value.`;


    for (let i = at; i < arr.length - 1; i++) {
        // console.log(arr[i])
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1


    return `Actual element after item removed -: [${arr}] & Removed itme is -: ${removedEl}`;
}


const arr = [50, 10, 40, 70, 80, 100, 200, 300, 400]
const at = 5

console.log(deleteElFromArr(arr, at))


