
// // // Implement Graph by Adjacency List :-


class Graph {

    constructor(){
        this.data = {}
    }



    printGraph(){
        console.log(JSON.stringify(this.data))
        return JSON.stringify(this.data)
    }



    addVertex(node){

        if(!this.data[node]){
            this.data[node] = []
        }else{
            console.log(this.data[node] , "Is already present in :- " , this.printGraph())
        }

    }



    addEdges( n1 , n2 ){

        if( !this.data[n1] ){
            this.addVertex(n1)
        }

        if(!this.data[n2]){
            this.addVertex(n2)
        }

        this.data[n1].push(n2)
        this.data[n2].push(n1)

    }


}





let graph1 = new Graph


// // // Only Vertex/Node adding without edges.
// // // Newly added node will make disconnected Graph.
graph1.addVertex("A")
graph1.addVertex("B")
graph1.addVertex("C")
graph1.addVertex("D")


// // // Connecting Edge.
graph1.addEdges( "A" , "B" )
graph1.addEdges( "A" , "C" )
graph1.addEdges( "C" , "B" )
graph1.addEdges( "B" , "D" )


// // // Connecting Edge with New Nodes/Vertexs.
graph1.addEdges("E" , "Z")
graph1.addEdges("1" , "10")
graph1.addEdges("+" , "-")


// // // Connecting Edge and making Graph Connected.
graph1.addEdges( "Z" , "1" )
graph1.addEdges( "10" , "+" )
graph1.addEdges( "+" , "A" )


graph1.printGraph()


