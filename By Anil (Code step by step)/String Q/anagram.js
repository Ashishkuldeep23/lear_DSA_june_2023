// // // Check given two string is anagram or not ---->>




function checkAnagramStringsByMySelf( str1 , str2 ){

    // console.log(str1 , str2)
    
    if(str1.length !== str2.length){
        console.log(`${str1} & ${str2} both are not Anagram  (false)`)
        return `By Return :- ${str1} & ${str2} both are not Anagram (false)`
    }
    

    let obj = {}

    for(let i=0 ; i<str1.length ; i++){

        // console.log(i)
        // console.log(str1[i])

        if(obj[str1[i]]){
            obj[str1[i]]++
        }else{
            obj[str1[i]] = 1
        }

    }


    // console.log("First",obj)



    for(let i=0 ; i<str2.length ; i++){

        // console.log(obj[str2[i]])

        if(obj[str2[i]]){
            obj[str2[i]]--

            // console.log(str2[i])
            // console.log(obj)

        }else{

            // console.log(str2[i])

            console.log(`${str1} & ${str2} both are not Anagram  (false)`)
            return `By Return :- ${str1} & ${str2} both are not Anagram (false)`
        }

    }

    // console.log("Last",obj)

    console.log(`${str1} & ${str2} both are Anagram  (true)`)

    return `By Return :- ${str1} & ${str2} both are Anagram  (true)`

}


// checkAnagramStringsByMySelf("Hello" , "elloeqqqq")




// // // Improved by sir ----->
// 1) For of loop 
// 2) Condtion value put in first loop to create object.
// 3) handled else condition first in second loop

function checkAnanagramBySir(s1 , s2){

    if(s1.length !== s2.length){
        return false
    }

    let obj = {}

    for(let c of s1){

        // console.log(c)

        obj[c] = (obj[c] || 0) +1
        // // // Above line is new for me 
        // // // Logic is used better for me 
        // // // After equal to if obj[c] is (undefined ) then put 0 and next +1 it , now my key = 1 here.
        // // // if obj[c] is defined then it will ignored by || operator and then +1 it value , that's how get one more in value.

    }

    // console.log(obj)



    for(let ch of s2){

        if(!obj[ch]){
            return false
        }

        obj[ch]--

    }


    return true



}



let logMe = checkAnanagramBySir("madaM" , "Madam") ? "Both are Anagram" : "Not Anagram"

console.log(logMe)
