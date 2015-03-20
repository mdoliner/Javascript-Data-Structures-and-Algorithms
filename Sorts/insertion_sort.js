// Time O(n^2)
// Memory O(1)

/* An O(n^2) algorithm indicating that in random sets of data, it will be slow.
However, for small, nearly-sorted input Insertion Sort is great.
Only making the few swaps to put the elements back in order, the time won't be even close to n^2.
However, as a catch-all sorting algorithm, definitely too slow.
*/

function insertionSort(arr) {
  for (var i = 1, n = arr.length; i < n; i++) {
    var currEl = arr[i], currIdx = i;
    if (currEl < arr[currIdx - 1]) {
      for (var j = currIdx - 1; j >= 0; j--) {
        if (currEl < arr[j]) {
          swap(arr, currIdx, j);
          currIdx--;
          continue;
        }
        break;
      }
    }
  }
  return arr;
};

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};
