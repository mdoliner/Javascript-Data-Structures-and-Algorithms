/*A depth-first search implementation using the Node class found in tree.js
  For applications, such as shortest weighted distance, check out the algorithms in the Graphs folder */

Node.prototype.depthFirstSearch = function (value) {
  var result;
  if (this.value === value) {
    return this;
  }
  var child = this.child;
  while (child) {
    result = result || child.depthFirstSearch(value);
    child = child.sibling;
  }
  return result || -1; //returns -1 if value not found
}
