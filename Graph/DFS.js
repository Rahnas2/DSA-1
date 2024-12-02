

class Graph {
    constructor(){
        this.adjacancyList = {}
    }

    addVertex(vertex){
        if(!this.adjacancyList[vertex]){
            this.adjacancyList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacancyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacancyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacancyList[vertex1].add(vertex2)
        this.adjacancyList[vertex2].add(vertex1)
    }

    dfs(s){
        let visited = new Set()
        visited.add(s)

        this.dfsRec(s, visited)
    }

    dfsRec(s, visited){
        process.stdout.write(s + ' ')
        
        for(let i of this.adjacancyList[s]){
            if(!visited.has(i)){
                visited.add(i)
                this.dfsRec(i, visited)
            }
        }
    }

    //DFS for Disconnectted Graph
    diconnecttedDFS(){
        let visited = new Set()
        
        for(let i in this.adjacancyList){
            if(!visited.has(i)){
               this.DFSHelper(i, visited)
            }
        }
    }

    DFSHelper(s, visited){
        visited.add(s)
        process.stdout.write(s + ' ')
        for(let vertex of this.adjacancyList[s]){
            if(!visited.has(vertex)){
                this.DFSHelper(vertex, visited)
            }
        }
    }


    //Time Complexith : O(V + E),wehre V is the number of vertices and E is the number of edges in the graph
    //Auxilary Space : O(V + E),since a extra visited array of size V is requireid , size for recursive call to dfsRec function 


    display(){
        for(let v in this.adjacancyList){
            console.log(v + ' ---> ' + [...this.adjacancyList[v]])
        }
    }
}


const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')


graph.addEdges('A','B')
graph.addEdges('A','D')
graph.addEdges('A','E')
graph.addEdges('A','C')



graph.dfs('A')

console.log()
//for disconnnectted graph
graph.diconnecttedDFS()

console.log()

graph.display()


//DFS for disconnectted graph


