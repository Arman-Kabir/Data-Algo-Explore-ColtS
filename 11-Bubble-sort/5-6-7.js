
// 5 - Implementation
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        for (var j = 0; j < arr.length; j++) {
            console.log(arr);
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));