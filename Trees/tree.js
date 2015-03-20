/*A very simple implementation of a tree.
  A linked list structure is used for children.
  Alternatively an array could be used to hold all the children,
  but the dynamic resizing of the array means insertion would take longer on average. */

function Node(value) {
  this.value = value;
  this.sibling = null;
  this.child = null;
};

Node.prototype.addChild = function (value) {
  var newChild = new Node(value);
  newChild.sibling = this.child;
  this.newChild = child;
};
