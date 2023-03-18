/** 3   pivot helper || Pseudocode ||| partition or pivot
 * 
 * *It will help to accept three arguments: an array, a start index and an end index(these can default to 0 and the array length minus 1, respectively)
 * *Grab the pivot from the start of the array
 * *Store the current pivot index in a variable(This will keep track of where the pivot should end up) 
 * 
 */


// 4
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    console.log(array, i, j);
}
function pivot(arr, start = 0, end = arr.length - 1) {
    var pivot = arr[start];
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(swapIdx, start, arr);
        }
    }
    swap(arr, start, swapIdx);
    return [swapIdx,arr];
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
