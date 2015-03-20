// Time: O(nlogn)
// Memory: O(n)

/* If you need a fast, stable sort, Merge Sort is your go-to.
While its best-case isn't as good as Quick Sort's, its worst-case is better.
Also, unlike Quick Sort, Merge Sort is a stable sort, so equal valued inputs will retain their L->R ordering.
*/

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var middleIdx = Math.floor(arr.length / 2);
  //merge the sorted left and right halves of the array
  //these two halves could have been stored in readable vars but that would have used lots of memory
  return merge(mergeSort(arr.slice(0, middleIdx)), mergeSort(arr.slice(middleIdx)));
};

function merge(arr1, arr2) {
  var result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    //This <= allows for Merge Sort to be stable
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
};
