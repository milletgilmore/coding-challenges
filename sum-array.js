//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

// parameters -> array, not empty, any length, only numbers or strings, strings of numbers, no funny biz
// array-> single number, type and value are number, will always be a number


function sumMix(arr) {
    //turn all array into numbers
    //reduce the arrays into a number 
    return arr.reduce((a, b) => a += Number(b), 0)
  }
  
  
  
  console.log(sumMix([9, 3, '7', '3']), 22)
  console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41)
  