//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

//taking in an array of numbers, always be numbers, always be at least 2, never be empty, always be type of number

//array-> single number returned, number of value and type, always will be a number, will be a positive whole number rounded down

function getAverage(arr) {
    //iterate over all numbers 
    //find average
    //rounded down
    return Math.floor(arr.reduce((a, b) => a + b / arr.length, 0))
  
  }
  
  
  console.log(getAverage([2, 2, 2, 2]), 2)
  console.log(getAverage([1, 2, 3, 4, 5,]), 3);
  console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1)