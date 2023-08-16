


// // // In linear search we are going to run a loop on our given arr and in every itration check with find element.
// // // This search is good for less length of arr and also good when searchin a element i non sorted arr.

function linearSearch() {



    let arr = [50, 40, 15, 11, 25, 75, 80, 90]
    let find = 10
    let position = "Not Found"

    for (let i = 0; i < arr.length; i++) {
        // console.log(i)

        if (arr[i] == find) {
            position = "Item found at index " + i + " in :- " + arr
            break
        }
    }


    console.log(position)

}



// linearSearch()



function findAllElementsByLinearSearch(){

    let data = [40 , 50 , 14 , 11 , 40 , 70 , 80]

    let find = 100

    let at = []
    let currentSize = at.length


    for(let i=0 ; i<data.length; i++){


        if(data[i] == find){
          
            at[currentSize] = i
            currentSize ++

             continue;

        }

    }


    let log = (at.length === 0) ? `${find} Not found in ${data}` : (at.length === 1) ? `${find} found at only one position in ${data} at ${at[0]}` : `${find} found on several positions in ${data} at ${at}`

    console.log(log)


}



findAllElementsByLinearSearch()


