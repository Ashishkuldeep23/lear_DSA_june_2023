

// // // // Insertion Sorting ----->

// // // On Oen ------->


let data = [11, 12, 13, 5, 6, 120, 15, 50, 60, 50, 666]


function insertionSortingOnOwn(data) {


    for (let i = 0; i < data.length; i++) {

        let minAt = i

        // console.log(data[minAt])

        for (let j = data.length - 1; j > i; j--) {

            // console.log(data[j])


            // // // Working but this is not go way of Insertion algorihm.
            if (data[i] > data[j]) {

                let temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }

        }




    }


    console.log(data)
    console.log("Above is working but not actual insertion sort.")


}


// insertionSortingOnOwn(data)



// let data = [11 , 12 , 13 , 5 , 6]


function insertionSortByVideoTech(data) {
    let i, currentEl, j

    // // // Uncomment the console logs and see the implementation of loop.

    for (i = 1; i < data.length; i++) {     // // // Run a loop from 1 to length (not starting 0 becoz we are going to compare with other elemens not with own)
        // console.log(data[i])
        currentEl = data[i]     // // // Store data[i]

        j = i - 1        // // // j will start from 1 minus of i (means in 1st itration j starts from 0 and)
        while (j >= 0 && data[j] > currentEl) {         // // // two condition 1st is j run till the zero and 2nd is data[j] should be greater the current element (data[i]) , If both condtion will gives true then only run this loop.

            data[j + 1] = data[j]     // // // The 1st swip the value of j with j+1 (becoz data[j+1] have value of currentElement on first itration) , paste the value of j into j+1 (at i postion).

            // console.log(currentEl)
            // console.log(data)
            j--     // // // j = j-1  , to run the loop
        }

        // console.log(j)

        data[j + 1] = currentEl   // // // Here insert the value of currentElement (data[i]) at the place of j+1 (j+1 because if j come to 0 then currently j is -1 and if j come to 1 then currntly j is 0 , that's why j+1 , j-- will reduce the value of j-- if loop runs)

    }

    console.log(data)   // // // After the for loop we have sorted arr.

}




// insertionSortByVideoTech(data)



// // // Not solved 
// // // Question given by Anil sir.
// let data = [11 , 5 , 13 , 12 , 6]

function insertionSortBySkip(data) {

    let skip1 = 13
    let skip2 = 5

    let i, current, j

    for (i = 1; i < data.length; i++) {

        current = data[i]

        // console.log(data[i] , skip1)
        // console.log(data[i] , skip2)
        // console.log(data[i] === skip1)
        // console.log(data[i] === skip2)


        j = i - 1

        while (j >= 0 && data[j] > current) {


            if ((data[j] !== skip1) || (data[j] !== skip2)) {
                // console.log("ak")
                // continue
                data[j + 1] = data[j]
            }


            j--

        }

        data[j + 1] = current

    }

    console.log(data)
}


insertionSortBySkip(data)









