

const graphMatrix = [
    [0 , 1 , 1 , 0] , 
    [1 , 0 , 1 , 0] ,
    [1 , 0 , 0 , 1] ,
    [0 , 0 , 0 , 1]
]


console.log(graphMatrix[0][2])
console.log(graphMatrix[0][3])
console.log(graphMatrix[2][1])



const graphList = {
    "a" : ["b" , "c"],
    "b" : ["a" , "c"],
    "c" : ["a" , "d"] ,
    "d" : ["c"]
}


console.log(graphList["a"])
console.log(graphList["d"])
console.log(graphList.c)

