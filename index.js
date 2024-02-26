/* 
Problem: Given a sorted array of 'n' elements and a target of 't', find the
index of 't' in the array. Return -1 if the target element is not found.

Binary search only works on a sorted arrays.
If the array is not sorted...sort it first then apply binary search.

Pseudo Code
Find the middle element
If target is === to middle element return middle index.
If target is < middle element binary search left half of array.
If target is > middle binary search right half of the array.
*/

function binarySearch(arr, target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5,0,5,15,20], 15))
console.log(binarySearch([6,12,18,24,32], 12))
console.log(binarySearch([10,20,30,40,50], 30))

// BigO === O(logn)
// While there is only 1 loop...a while loop each iteration cuts it in half.