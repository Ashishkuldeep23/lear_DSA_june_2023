


function maxOccuredCharacter(str) {

    let obj = {}
    let maxCh = str[0]  // // // Put first character of string initially and we will update this by if codition in side the loop.


    for(let key of str){
        // console.log(maxCh)
        // console.log(key)

        obj[key] = ( obj[key] || 0) +1
        
        if(obj[key] > obj[maxCh]){
            maxCh = key    
        }   
    }


    if(maxCh === str[0]){
        maxCh = "None"
    }


    // console.log(obj)

    return `Maximum character present in '${str}' string is '${maxCh}' this present '${obj[maxCh] || 0}' times in '${str}' `

    // console.log(obj)

}



console.log(maxOccuredCharacter("Ashish"))