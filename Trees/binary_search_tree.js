/*A basic unbalanced Binary Search Tree implementation*/
 
function BSTNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BSTNode.prototype.addChild = function (value) {
  if (this.value > value) {
    if (!this.left) {
      this.left = new BSTNode(value);
    } else {
      this.left.addChild(value);
    }
  } else {
    if (!this.right) {
      this.right = new BSTNode(value);
    } else {
      this.right.addChild(value);
    }
  }
};

BSTNode.prototype.search = function (value) {
  var result;
  if (this.value === value) {
    return this;
  }
  if (this.value > value) {
    result = this.left && this.left.search(value);
  } else {
    result = this.right && this.right.search(value);
  }
  return result || -1;
}
