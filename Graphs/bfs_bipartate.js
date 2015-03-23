/* An algorithm for checking if a graph is bipartate (two-colorizable) */

Graph.prototype.bipartate = function () {
  var status = [], bipartate = true, graph = this, color = [];
  for (var i = 0; i < this.nVertices; i++) {
    status[i] = "U"; //U = Undiscovered, D = Discovered, P = Processed
    color[i] = "N"; //N = None, W = White, B = Black
  }
  for (var i = 0; i < this.nVertices; i++) {
    if (status[i] === "U") {
      color[i] = "W"; //Assign a color to starting vertex
      bfs(i);
    }
    if (!bipartate) {
      return false;
    }
  }

  return true;

  function bfs (startVtx) {
    var queue = [startVtx];
    while (queue.length > 0) {
      var currVtx = queue.shift();
      var currColor = color[currVtx];
      var adjList = graph.adjLists[currVtx];
      while (adjList) {
        var adjVtx = adjList.vtx;
        if (status[adjVtx] === "U") {
          queue.push(adjVtx);
          status[adjVtx] = "D";
          color[adjVtx] = (currColor === "W" ? "B" : "W"); //Assign opposite color to current vertex
        }
        if (status[adjVtx] === "P" || graph.directed) {
          if (currColor === color[adjVtx]) {
            bipartate = false;
            return;
          }
        }
        adjList = adjList.next;
      }
      status[currVtx] = "P";
    }
  };

};
