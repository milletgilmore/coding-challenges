/*Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) */


function nthSmallest(arr, pos){
    // sort it from small to large
    //return the nth index - 1
    return arr.sort((a,b) => a-b)[pos-1]
  
  }
  
  // array, numbers, all numbers, whole at least 3, neg 0 or pos, no funny biz
  // a whole number, positive, less than the array length, no funny biz, type number
  // array and nth -> one element in array- whole number, pos neg or 0, always be 1 number, type number
  