// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's
// and return its area.
// Example:
// Input:
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
// Output: 4


// takes in a square matrix and output the largest square with all 1's and calculate the area
// Input: matrix, output: number as area, constraints: if matrix has all 0's return 0,


var findTheLargestSquare = (matrix) => {

  // array of squares

  // array of values

  // loop through the matrix's inner arrays

    // identify the square in the inner arrays

      // count the number of 1's in a row check if the next row has a 1 in the same index and keep track of the index
      // if so
      // iterate to next element and repeat above, add the value "2" to an array of values that goes inside another array

      // else go to the next element

  // for the array of squares, sum the values of the square array inside if the sum is 2 don't count it

  // return the largest value



};




var testMatrix =
[[1,0,1,0,0],
[1,0,1,1,1],
[1,1,1,1,1],
[1,0,0,1,0],
]

var findLargestSquareActual = findTheLargestSquare(testMatrix);

var findLargestSquareExpected = 4;

// calculate results

var assertEqual = (findLargestSquareActual, findLargestSquareExpected) => {
  return findLargestSquareActual === findLargestSquareExpected;
};