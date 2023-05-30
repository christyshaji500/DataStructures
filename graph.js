class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      this.vertices[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
        throw new Error("Invalid vertices");
      }
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1);
    }
  
    removeVertex(vertex) {
      if (!this.vertices[vertex]) {
        throw new Error("Invalid vertex");
      }
      delete this.vertices[vertex];
      for (let currentVertex in this.vertices) {
        const edges = this.vertices[currentVertex];
        const index = edges.indexOf(vertex);
        if (index !== -1) {
          edges.splice(index, 1);
        }
      }
    }
  
    removeEdge(vertex1, vertex2) {
      if (
        !this.vertices[vertex1] ||
        !this.vertices[vertex2] ||
        !this.hasEdge(vertex1, vertex2)
      ) {
        throw new Error("Invalid edge");
      }
      const edges1 = this.vertices[vertex1];
      const index1 = edges1.indexOf(vertex2);
      edges1.splice(index1, 1);
  
      const edges2 = this.vertices[vertex2];
      const index2 = edges2.indexOf(vertex1);
      edges2.splice(index2, 1);
    }
  
    hasVertex(vertex) {
      return this.vertices.hasOwnProperty(vertex);
    }
  
    hasEdge(vertex1, vertex2) {
      if (!this.hasVertex(vertex1) || !this.hasVertex(vertex2)) {
        return false;
      }
      const edges = this.vertices[vertex1];
      return edges.includes(vertex2);
    }
  
    getNeighbors(vertex) {
      if (!this.hasVertex(vertex)) {
        throw new Error("Invalid vertex");
      }
      return this.vertices[vertex];
    }
  
    printGraph() {
      for (let vertex in this.vertices) {
        const edges = this.vertices[vertex];
        const edgeList = edges.join(", ");
        console.log(`${vertex} -> ${edgeList}`);
      }
    }
  }
  

  const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

console.log(graph.hasVertex("A")); // true
console.log(graph.hasEdge("A", "B")); // true
console.log(graph.getNeighbors("B")); // ["A", "C"]

graph.removeEdge("B", "C");
console.log(graph.hasEdge("B", "C")); // false

graph.removeVertex("A");
console.log(graph.hasVertex())
