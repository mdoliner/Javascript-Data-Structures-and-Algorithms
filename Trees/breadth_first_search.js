/*A breadth-first search implementation using the Node class found in tree.js
  For applications, such as shortest unweighted distance, check out the algorithms in the Graphs folder */

TreeNode.prototype.breadthFirstSearch = function (value) {
  var queue = [this];
  while (queue.length > 0) {
    var node = queue.shift();
    if (node.value === value) {
      return node;
    }
    var child = node.child;
    while (child) {
      queue.push(child);
      child = child.sibling;
    }
  }
  return null; //returns null if value not found
}
