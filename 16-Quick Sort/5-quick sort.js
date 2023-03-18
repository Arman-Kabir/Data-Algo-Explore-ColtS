
function quickSort(arr, left = 0, right = arr.length - 1) {
    let pivotIndex = pivot(arr, left, right);
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

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
    return [swapIdx, arr];
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));