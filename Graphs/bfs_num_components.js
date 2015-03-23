/* An algorithm for finding the number of connected components in a graph
   through a breadth-first search. */

Graph.prototype.numConnectedComponents = function () {
  var status = [], graph = this, numComponents = 0;
  for (var i = 0; i < this.nVertices; i++) {
    status[i] = "U"; //U = Undiscovered, D = Discovered, P = Processed
  }
  for (var i = 0; i < this.nVertices; i++) {
    if (status[i] === "U") {
      numComponents++;
      bfs(i);
    }
  }
  return numComponents;

  function bfs (startVtx) {
    var queue = [startVtx];
    while (queue.length > 0) {
      var vertex = queue.shift();
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
