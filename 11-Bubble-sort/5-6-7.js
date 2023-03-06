
// 5 - Implementation
// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         for (var j = 0; j < arr.length; j++) {
//             console.log(arr,i,arr[j],arr[j+1]);
//             if (arr[j] > arr[j + 1]) {
//                 // swap
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([37, 45, 29, 8]));


function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        // console.log(arr[i]);
        for (var j = 0; j < i-1; j++) {
            console.log(arr, i, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log("One Pass complete");
    }
    return arr;
}

console.log(bubbleSort([37, 45, 29, 8,12,88,-3]));