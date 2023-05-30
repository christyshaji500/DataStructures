class GraphM {
    constructor() {
      this.numVertices = 0;
      this.adjMatrix = [];
      this.vertexValues = [];
      this.vertexIndices = {};
    }
  
    addEdge(v1, v2) {
      let i = this.vertexValues.indexOf(v1);
      let j = this.vertexValues.indexOf(v2);
    
      if (i === -1 || j === -1) {
        console.log("One or both vertices not found");
        return;
      }
    
      this.adjMatrix[i][j] = 1;
      this.adjMatrix[j][i] = 1;
    }
    
  
    addVertex(vertex) {
  this.vertexValues.push(vertex);
  this.numVertices++;
  this.vertexIndices[vertex] = this.numVertices - 1;

  // Add new row for the new vertex
  this.adjMatrix.push(new Array(this.numVertices).fill(0));

  // Extend existing rows
  for (let i = 0; i < this.adjMatrix.length - 1; i++) {
    this.adjMatrix[i].push(0);
  }
}

        
    removeEdge(v1, v2) {
      let i = this.vertexValues.indexOf(v1);
      let j = this.vertexValues.indexOf(v2);
      if (i === -1 || j === -1) return false;
      this.adjMatrix[i][j] = 0;
      this.adjMatrix[j][i] = 0;
      return true;
    }

    removeVertex(value) {
        const index = this.vertexValues.indexOf(value);
        if (index === -1) return false;
    
        this.vertexValues.splice(index, 1);
        this.numVertices--;
    
        // Remove row from adjMatrix
        this.adjMatrix.splice(index, 1);
    
        // Remove column from adjMatrix for each row
        for (let i = 0; i < this.numVertices; i++) {
          this.adjMatrix[i].splice(index, 1);
        }
    
        // Update vertexIndices for remaining vertices
        for (let i = index; i < this.numVertices; i++) {
          const vertexValue = this.vertexValues[i];
          this.vertexIndices[vertexValue]--;
        }
    
        // Delete entry for removed vertex from vertexIndices
        delete this.vertexIndices[value];
    
        return true;
      }
  
      bfs(startValue) {
        let visited = new Array(this.numVertices).fill(false);
        let queue = [];
        let result = [];
        let startVertex = this.vertexValues.indexOf(startValue);
        visited[startVertex] = true;
        queue.push(startVertex);
        while (queue.length > 0) {
          let vertex = queue.shift();
          result.push(this.vertexValues[vertex]);
          let neighbors = this.getNeighbors(this.vertexValues[vertex]); // Pass vertex value
          neighbors.forEach((neighbor) => {
            let neighborIndex = this.vertexValues.indexOf(neighbor); // Get index of neighbor
            if (!visited[neighborIndex]) { // Check visited using index
              visited[neighborIndex] = true; // Mark as visited
              queue.push(neighborIndex); // Enqueue index
            }
          });
        }
        return result;
      }
      
  

    getNeighbors(vertex) {
        const index = this.vertexValues.indexOf(vertex);
        if (index === -1) return [];
      
        const neighbors = [];
        for (let i = 0; i < this.numVertices; i++) {
          if (this.adjMatrix[index][i] === 1) {
            const neighborValue = this.vertexValues[i];
            neighbors.push(neighborValue);
          }
        }
        return neighbors;
      }
      
    print() {
      for (let item of this.adjMatrix) {
        console.log(item);
      }
    }
  
    dfs(startValue) {
      let visited = new Array(this.numVertices).fill(false);
      let result = [];
      let startVertex = this.vertexValues.indexOf(startValue);
      this._dfsHelper(startVertex, visited, result);
      return result;
    }
  
    _dfsHelper(vertex, visited, result) {
      visited[vertex] = true;
      result.push(this.vertexValues[vertex]);
      let neighbors = this.getNeighbors(vertex);
      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          this._dfsHelper(neighbor, visited, result);
        }
      });
    }
  }
  
  let g = new GraphM();
  g.addVertex(0);
  g.addVertex(1);
  g.addVertex(2);
  g.addVertex(3);
  g.addVertex(4);
  g.addVertex(8);
  g.addVertex(9);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 3);
  g.addEdge(2, 3);
  g.addEdge(3, 4);
  g.addEdge(4, 8);
  g.addEdge(4,9)
 


  console.log(g.bfs(1));
  console.log(g.dfs(1 ));
  console.log(g.getNeighbors(3));
//   g.print()
  