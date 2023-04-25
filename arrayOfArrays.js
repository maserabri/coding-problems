/*You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.*/

function getLengthOfMissingArray(arrayOfArrays) {
  let lengths = (arrayOfArrays || []) // Create a new array containing the lengths of the subarrays
    .map(a => a ? a.length : 0)      // If a subarray is null or empty, set its length to 0
    .sort((a, b) => a - b);              // Sort the array in ascending order of length

  if (lengths.includes(0)) {            // If there is a null or empty subarray, return 0
    return 0;
  }
  for (let i = 0; i < lengths.length - 1; i++) { // Check for gaps between consecutive lengths
    if (lengths[i] + 1 !== lengths[i + 1]) {    // If a gap is found, return the missing length
      return lengths[i] + 1;
    }
  }
  return 0; // If there are no gaps, return 0
}
