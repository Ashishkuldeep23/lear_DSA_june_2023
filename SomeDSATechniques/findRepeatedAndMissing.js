// // // Next -------->

// Input:[3 1 2 5 3] 

// Output:[3, 4] 

// A = 3, B = 4



function findRepetedAndMissing (arr){

    // console.log(arr)

    let isRepeated = {}

    let max = 0

    let repeated = null;

    let missing = null;


    for(let i in arr){
        // console.log(i)

        if(arr[i] > max){
            max = arr[i]
        }


        if(isRepeated[arr[i]]){
            repeated = arr[i]  
        }

        // let cal = arr[i] + 1

        // if(!isRepeated[cal]  && missing < max){
        //     missing = cal
        //     // console.log(missing , i)
        // }


        isRepeated[arr[i]] = true

    }

    // console.log(isRepeated  , repeated , max , missing)

    console.log( repeated  , missing)

}

let list = [3 ,1 , 2 ,  5 ,  4 , 6 , 6]

findRepetedAndMissing( list)
