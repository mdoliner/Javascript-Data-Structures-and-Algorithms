/* A breadth-first search using the graph implementation in graph_adj_list.js
   This is just the most basic implementation, it just finds a vertex.
   Your implementation will depend on the types of problems you're trying
   to solve. Applications for number of components and checking for bipartate
   are also located in this folder. */

Graph.prototype.breadthFirstSearch = function (target) {
  var status = [], result, graph = this;
  for (var i = 0; i < this.nVertices; i++) {
    status[i] = "U"; //U = Undiscovered, D = Discovered, P = Processed
  }
  for (var i = 0; i < this.nVertices; i++) {
    if (status[i] === "U") {
      //Will do a breadth-first search on every component until it finds the target
      result = result || bfs(target, i);
    }
  }

  return result;

  function bfs(target, startVtx) {
    var queue = [startVtx];
    while (queue.length > 0) {
      var vertex = queue.shift();
      if (vertex === target) {
        return target;
      }
      var adjList = graph.adjLists[vertex];
      while (adjList) {
        var adjVtx = adjList.vtx;
        if (status[adjVtx] === "U") {
          queue.push(adjVtx);
          status[adjVtx] = "D";
        }
        adjList = adjList.next;
      }
      status[vertex] = "P";
    }
  };

};
