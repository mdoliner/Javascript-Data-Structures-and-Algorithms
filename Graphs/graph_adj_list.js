/*A Graph implementation using Adjacency Lists.
  Each adj list points to a Linked List type object with references to the next adj vertex.
  This implementation assumes the graph is weighted, in practice you would modify as necessary.
  The number of vertices in this implementation must be supplied, depending on how you are constructing
  your graph in real life, this will change.
  In real practice, you would probably know some of this information.
  */
function Graph(nVertices, directed) {
  this.nVertices = nVertices;
  this.directed = directed;

  this.adjLists = [];
  for (var i = 0; i < nVertices; i++) {
    this.adjLists[i] = null;
  }
};

//An edge with a weight and end vertex (sink)
function EdgeNode(vtx, weight) {
  this.vtx = vtx;
  this.weight = weight;
  this.next = null; //Points to other items in same adj list
};

Graph.prototype.addEdge = function (startVtx, endVtx, weight, directed) {
  var isDirected = directed || this.directed; //allows user to ignore directed param, useful later
  var adjList = this.adjLists[startVtx];
  var edge = new EdgeNode(endVtx, weight);
  edge.next = adjList;
  this.adjLists[startVtx] = edge;
  if (!isDirected) {
    this.addEdge(endVtx, startVtx, weight, true); //adds one more edge in other direction
  }
};
