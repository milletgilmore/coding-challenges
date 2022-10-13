/*Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/

//integer -> whole, positive, no funny biz, 1 number, type number

//num -> 3 things, print "Fizz", "Buzz" or "Fizz Buzz", number

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("Fizz Buzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}



  fizzBuzz(2)
  fizzBuzz(5)
  fizzBuzz(3)
  fizzBuzz(15)
  
