


function fabWithRecursion(n){
    // console.log(n)
    if(n<2){
        return n
    }
    return  fabWithRecursion(n-1) + fabWithRecursion(n-2)
}



console.log(fabWithRecursion(6))

