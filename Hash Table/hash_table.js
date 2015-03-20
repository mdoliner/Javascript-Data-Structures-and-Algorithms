//Below is a Hash Table implemented using arrays. You'll find it heavily annotated

/*For our hashing functions to work, the table size must be prime
  For better load balancing (less collisions), use a prime that isn't 2^n - 1
  131 is arbitrary, determine table size based on the scale of the problem */
var TABLE_SIZE = 131;

function HashTable() {
  this.table = [];
  for (var i = 0; i < TABLE_SIZE; i++) {
    this.table[i] = null;
  }
};

/*Since no info is known about these keys, this hashing function provides options
  for both numbers and strings.*/
function hash(key) {

  /*A pretty standard number hashing practice, for a random distrubtion of number keys,
    modulusing it by our prime table size should give all indicies equal probability */
  if (typeof key === "number") {
    return key % TABLE_SIZE;
  }

  /*A similar approach for strings, turning the string into a number and then modulusing
    the number 31 is there to give weight to each index, so something like 'hey' and 'ehy'
    are different hashes. It just has to be a small prime number, 31 is used since that is
    what Java uses */
  if (typeof key === "string") {
    var hash = 0;
    for (var i = 0, n = key.length; i < n; i++) {
      hash = (31 * hash + key.charCodeAt(i)) % TABLE_SIZE;
    }
    return hash;
  }
};

/*For collisions, we will use chaining. Thus if two keys hash to the same index,
  the HashTable will point to a linked list that can be traversed to find all the values*/

function HashItem(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
};

HashTable.prototype.set = function (key, value) {
  var hashIdx = hash(key), currEl = this.table[hashIdx];
  if (!currEl) {
    this.table[hashIdx] = new HashItem(key, value);
    return;
  }
  while (currEl) {
    if (currEl.key === key) {
      currEl.value = value;
      return;
    }
    var prevEl = currEl;
    currEl = currEl.next;
  }
  prevEl.next = new HashItem(key, value);
};

HashTable.prototype.get = function (key) {
  var currEl = this.table[hash(key)];
  while (currEl) {
    if (currEl.key === key) {
      return currEl.value;
    }
    currEl = currEl.next;
  }
};

HashTable.prototype.delete = function (key) {
  var hashIdx = hash(key), currEl = this.table[hashIdx], prevEl;

  //if key is first item in linked list, removal is slightly different
  if (currEl && currEl.key === key) {
    this.table[hashIdx] = currEl.next;
    return;
  }
  while (currEl) {
    if (currEl.key === key) {
      prevEl.next = currEl.next;
      return;
    }
    prevEl = currEl;
    currEl = currEl.next;
  }
};
