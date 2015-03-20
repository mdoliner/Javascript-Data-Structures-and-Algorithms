// Time: O(nlogn), Worst-Case O(n^2)
// Memory: O(n) -> If JS had tail recursion, could be refactored to O(1), many QS algos are

/*The go-to fast algorithm. Not stable, but has the potential to be super fast.
A big factor in the efficiency is the choice of partition.
In the implementation below the partition is always the leftmost element in each subarray.
This makes for an easier implementation, but will be O(n^2) for a reverse-sorted array.
For a more robust implementation, see the other Quick Sort in this repo.
*/

function quickSort(arr) {
  qs(arr, 0, arr.length - 1);
  return arr;
};

function qs(arr, start, end) {
  //Base Case: Nothing left to sort in this subarray
  if (start >= end) return;

  var left = start, right = end;

  while (left < right) {
    if (arr[left] > arr[left + 1]) {
      swap(arr, left, left + 1);
      left++;
    } else {
      swap(arr, left + 1, right);
      right--;
    }
  }
  qs(arr, start, left - 1);
  qs(arr, left + 1, end);
};

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};
