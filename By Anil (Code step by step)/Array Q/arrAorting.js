


const arr = [15 , 12 ,3, 99 , 41 , 60 , 70 , 50 , 90 , 100 , 105 , 110 , 120 , 135]



for(let i=0 ; i<arr.length ; i++){

    // console.log( i +"  " + arr[i] )
    // console.log(arr)
    
    for(let j=0 ; j<arr.length ; j++){
        
        // console.log(arr)      
        // console.log(j + "  " + arr[j])
        
        if(arr[j] > arr[j+1]){
            
            let temp = arr[j]
            arr[j] = arr[j+1] 
            
            arr[j+1] = temp
            
        }
        
    }

}



console.log(arr)



