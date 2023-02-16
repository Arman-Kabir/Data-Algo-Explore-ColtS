// 15.4 Merging Arrays

/*
*   In order to implement merge sort, it's useful to first implement a function
    responsible for mereging two sorted arrays.

    Given two arrays which are sorted, this helper function should create a new array
    which is also sorted, and consists of all of the elements in the two input arrays.

    The function should   run in O(n+m) time and O(n+m) space and
    should not modify the parameters passed to it.

    // Merging Arrays Pseudocode
    *Create an empty array, take a look at the smallest values in each input array.
    *While there are still values we haven't looked at ---
        *
*/


// 15.5 - Merging Arrays
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));