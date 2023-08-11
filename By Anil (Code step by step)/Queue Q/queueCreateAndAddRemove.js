

// // // Implement queue and perform enqueue and dequeue opertaions ---------->
// // // Queue fallows Fisrt In and First Out.

let queue = [];
let currentSize = queue.length;
let maxSize = 5;



function display(){
    console.log(queue)
}


function enqueue(newEl){

    if(currentSize >= maxSize){return console.log("Queue is already full can't add new element :- "+newEl)}

    queue[currentSize] = newEl
    currentSize++

}


function dequeue(){

    if(currentSize <= 0){return console.log("Queue is empty , can't remove element.")}

    let removedElement = queue[0]

    for(let i=0 ; i<queue.length ; i++){
        queue[i] = queue[i+1]
    }

    currentSize--
    queue.length = currentSize

    return console.log(removedElement)

}





enqueue(40)
enqueue(50)
enqueue(60)
enqueue(70)
enqueue(80)


display()

