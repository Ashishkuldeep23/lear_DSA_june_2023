

// // // Selection Sorting in js


// // ------------------------------ By Me -------------------------


// // // Accending order (non decending order)
let data = [-210 , -310 ,  12 , 53 , 20 , 3 , 7 , 100 , 50 , 777 , 999]

for(let i=0 ; i<data.length ; i++ ){

    let largest = Infinity
    let position;

    for(let j = i ; j<data.length ; j++){{

        // console.log(data[j])

        if(data[j] < largest){
            // console.log("Ak")
            largest = data[j]
            position = j
        }
    }}

    // console.log(position , data[position])
    

    let temp = data[i]
    data[i] = data[position]
    data[position] = temp


}

console.log(data)





// // // Deccending order 


let arr =  data;

for(let i=0 ; i<arr.length ; i++){

    let smallest = -Infinity
    let p;

    for(let j=i ; j<arr.length ; j++){

        if(arr[j] > smallest){
            smallest = arr[j]
            p = j
        }

    }


    let t = arr[i]
    arr[i] = arr[p]
    arr[p] = t


}




console.log(arr)





// // ------------------------------ After Watching video -------------------------

// let data = [-210 , -310 ,  12 , 53 , 20 , 3 , 7 , 100 , 50 , 777 , 999]



function selectionSortingDeccending(data){

    
    for(let i=0 ; i<data.length  ; i++){

        let minIndex = i      // // // Initally on every itration suppose minimum ele is data[i]

        for(let j=i+1 ; j<data.length ; j++){

            // // // If data of i is greater then data of j then update minium element index.
            // // // This means if any number of data[j] is smaller then data[minIndex] means that is minimum for this itration and if j loop over then we have minimum element's index in minIndex. Then swap the value of current and minimus
            if(data[minIndex] > data[j]){
                minIndex = j
            }

        }

        // console.log(minIndex)

        let temp = data[i]
        data[i] = data[minIndex]
        data[minIndex] = temp

        // console.log(i ,data)


    }


    console.log(data)

}

selectionSortingDeccending(data)



// let data = [-210 , -310 ,  12 , 53 , 20 , 3 , 7 , 100 , 50 , 777 , 999]


function selectionSortingAAeccending(data){
    
    for(let i=0 ; i<data.length ; i++){

        let maxIndex = i      // // // Initally on every itration suppose minimum ele is data[i]

        for(let j=i+1 ; j<data.length ; j++){
            if(data[maxIndex] < data[j]){
                maxIndex = j
            }

        }

        // console.log(minIndex)

        let temp = data[i]
        data[i] = data[maxIndex]
        data[maxIndex] = temp

        // console.log(i ,data)

    }


    console.log(data)

}

selectionSortingAAeccending(data)




