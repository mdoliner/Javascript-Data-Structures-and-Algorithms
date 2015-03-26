/* A depth-first search using the graph implementation in graph_adj_list.js
This implementation contains a lot of excess work, which will be used in applications of dfs.
All this implementation ultimately does is find a vertex.
Your implementation will depend on the types of problems you're trying
to solve. */

Graph.prototype.depthFirstSearch = function (target) {
  var status = [], entry = [], exit = [], time = 0, graph = this, result;
  for (var i = 0; i < this.nVertices; i++) {
    status[i] = "U"; // U = Undiscovered, D = Discovered, P = Processed
    entry[i] = null; // Time that vertex was discovered
    exit[i] = null; // Time that vertex was processed
  }
  for (var i = 0; i < this.nVertices; i++) {
    if (status[i] === "U") {
      status[i] = "D";
      result = result || dfs(target, i);
    }
  }
  return result;

  function dfs(target, startVtx) {
    var dfsResult;
    time++;
    entry[startVtx] = time;
    if (startVtx === target) {
      dfsResult = startVtx;
    }
    var adjList = graph.adjLists[startVtx];
    while (adjList && !result) {
      var adjVtx = adjList.vtx;
      if (status[adjVtx] === "U") {
        status[adjVtx] = "D";
        dfsResult = dfsResult || dfs(target, adjVtx);
      }
      adjList = adjList.next;
    }
    status[startVtx] = "P";
    time++;
    exit[startVtx] = time;
    return dfsResult;
  }
};
