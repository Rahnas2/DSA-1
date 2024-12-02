
class GRAPH{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    bfs(start){
        let queue = [start]
        let result = []
        let visited = new Set()
        
        visited.add(start)
        while(queue.length > 0){
            let vertex = queue.shift()
            result.push(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    queue.push(neighbor)
                    visited.add(neighbor)
                }
            }
        }

        return result
    }

    //Time complexity : O(V+E),where v is the number of nodes and e is the number of edges
    //Auxilary space : O(v) ,

    bfsForDisconnectedGraph(){
        let result = []
        let visited = new Set()

        for(let vertex in this.adjacencyList){

            if(!visited.has(vertex)){

                let compenentResult = this.bfs(vertex)

                result.push(...compenentResult)

                for(let v of compenentResult){
                    visited.add(v)
                }
            }
        }

        return result
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' ---> ' + [...this.adjacencyList[vertex]])
        }
    }
}


const graph = new GRAPH()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
// graph.addEdges('A','B')
// graph.addEdges('A', 'C');
// graph.addEdges('B', 'D');
// graph.addEdges('C', 'E');
// graph.addEdges('D', 'E');

console.log(graph.bfs('A'))

console.log('disconnected graph',graph.bfsForDisconnectedGraph())

graph.display()