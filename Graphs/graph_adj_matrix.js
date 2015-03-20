/*A graph implementation using an adjacency matrix.
  The number of vertices in this implementation must be supplied, depending on how you are constructing
  your graph in real life, this will change. */

function Graph(nVertices, directed) {
  this.nVertices = nVertices;
  this.directed = directed;
  this.adjMatrix = new Array(nVertices);
  for (var i = 0; i < nVertices; i++) {
    this.adjMatrix[i] = new Array(nVertices);
    for (var j = 0; j < nVertices; j++) {
      this.adjMatrix[i][j] = 0;
    }
  }
};

Graph.prototype.insertEdge = function (startVtx, endVtx, weight) {
  this.adjMatrix[startVtx][endVtx] = weight || 1 //sets to 1 for unweighted graphs
  if (!this.directed) {
    this.adjMatrix[endVtx][startVtx] = weight || 1;
  }
};

Graph.prototype.removeEdge = function (startVtx, endVtx) {
  this.adjMatrix[startVtx][endVtx] = 0
  if (!this.directed) {
    this.adjMatrix[endVtx][startVtx] = 0;
  }
};

Graph.prototype.outEdges = function (source) {
  var result = [];
  for (var i = 0; i < this.nVertices; i++) {
    if (this.adjMatrix[source][i]) {
      result.push(i);
    }
  }
  return result;
};

Graph.prototype.inEdges = function (sink) {
  var result = [];
  for (var i = 0; i < this.nVertices; i++) {
    if (this.adjMatrix[i][sink]) {
      result.push(i);
    }
  }
  return result;
};
