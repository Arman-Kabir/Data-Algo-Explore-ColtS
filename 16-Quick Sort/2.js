/**Quick Sort
 * *It works on the same assumption that merge sort does. It's one that is going to be easiest to solve through recursion where we keep basically splitting up the data arrays that are 0 or 1 item long which means they are individually sorted.
 * 
 * *Like merge sort , exploits the fact that arrays of 0 and 1 element are always sorted.
 * 
 * *Works by selecting one element(called the "pivot") and finding the index where the pivot should    end up in the sorted array.
 * 
 * pivot = 5
 *      [5, 2, 1, 8, 4, 7, 6, 3]
 *                  5
 *      3,2,1,4              7,6,8
 *          3                   
 * 1,2          4  
 * 
 */