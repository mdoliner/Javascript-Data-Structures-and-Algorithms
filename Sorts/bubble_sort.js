// Time: O(n^2)
// Memory: O(1)

/*Bubble Sort is the most basic of sorting algorithms.
It continually iterates through an array swapping unsorted elements until everything is sorted.
Due to this excessive iteration, the worst-case time is O(n^2).

Bubble Sort can be used for small sets of nearly-sorted inputs, but even then there are better algos.
Unless an interviewer tells you to write Bubble Sort, don't.
The ease of implementation is tempting, however, it will display a lack of understanding of time complexity to an interviewer.
*/

function bubbleSort(arr) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0, n = arr.length; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
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
