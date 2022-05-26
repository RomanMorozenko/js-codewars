// Hello friends! 

//      Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


function dontGiveMeFive(start, end)
{
    let count = 0;
    for ( let i = start; i <= end ; i++ ) {
        let a = `${i}`
        if (a.includes('5')) continue
        else count++
    }
    return count;
}



//      Vowel Count.

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]){
            case 'a': 
            case 'e': 
            case 'i': 
            case 'o': 
            case 'u': 
            vowelsCount++;
            break;
        }
    }
    return vowelsCount;
  }

  // ^^^^^^ try to solve with regex ^^^^^^



//           Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    return +[...num+''].map(el=>parseInt(el)**2).join('');
  }


//   Jaden Casing Strings

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    return this
    .split(' ')
    .map( word => word[0].toUpperCase()+word.slice(1) )
    .join(' ')           
  };




// Is the date today

// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {

    return new Date().toDateString() === date.toDateString();

  }


//   Century From Year

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    return year%100 == 0 ? year/100 : Math.floor(year/100+1)
  }





//       Find Your Villain Name

// Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

// The first name will come from the month, and the last name will come from the last digit of the date:

// Month -> first name

// January -> "The Evil"
// February -> "The Vile"
// March -> "The Cruel"
// April -> "The Trashy"
// May -> "The Despicable"
// June -> "The Embarrassing"
// July -> "The Disreputable"
// August -> "The Atrocious"
// September -> "The Twirling"
// October -> "The Orange"
// November -> "The Terrifying"
// December -> "The Awkward"


// Last digit of date -> last name

// 0 -> "Mustache"
// 1 -> "Pickle"
// 2 -> "Hood Ornament"
// 3 -> "Raisin"
// 4 -> "Recycling Bin"
// 5 -> "Potato"
// 6 -> "Tomato"
// 7 -> "House Cat"
// 8 -> "Teaspoon"
// 9 -> "Laundry Basket"
// The returned value should be a string in the form of "First Name Last Name".

// For example, a birthday of November 18 would return "The Terrifying Teaspoon"

function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    let fullDate = new Date(birthday);
    let month = fullDate.getMonth();
    let date = fullDate.getDate().toString()

    return `The ${m[month]} ${ date.length > 1 ? d[date[1]] : d[date] }`
  }



//          Numerology

// In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date.

// Task
// Calculate the single integer digit by adding up every digit in the birthdate: month, date, full year, from left to right (MMDDYYYY). If the sum is greater or equal to 10, add up the two digits of the sum.

// You will be passed in a Date object corresponding to your language.


function solution(date){

    let newDate = new Date(date);
    let dateString = `${newDate.getDate()}${newDate.getMonth()+1}${newDate.getFullYear()}`
    let sum = 0;

    for (let element of dateString) {
        sum += +element;
        if (sum.toString().length > 1) {
            sum = (+sum.toString()[0]) + (+sum.toString()[1])
        }
    }

    return sum
}

//   Greatest common divisor

//Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


function mygcd(x,y){
  let lowestDigit = x > y ? y : x;

  let divisors = [];

  for ( let i = 1; i <= lowestDigit; i++ ) {
    if ( x%i == 0 && y%i == 0 ) {
      divisors.push(i)
    }
  }

  return divisors[divisors.length-1]
}


//  Currying functions: multiply all elements in an array

// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

function multiplyAll(arr){
  let initArray = arr;
  return function(n) {
      return initArray.map(item=> item*n)
  }
}


// Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;


function runningAverage(){
  let storage = 0;
  let calls = 0;
  return function(n) {
      storage+=n;
      calls++;
      return storage/calls
  }
}




// A function that works sometimes
// This kata is heavily influenced by the Once kata. It just adds a few extra steps to test fundamentals.

// Implement a function sometimes that takes another funciton as an argument and returns a new version of that function that will behave as the following:

// // Example function that will be passed as an argument to sometimes
// function add (a, b) {
//     return a + b;
// }

// var s = sometimes(add);

// // The first 3 tmes we call s it returns add's expected output
// s(4, 6) // returns 10
// s(3, 6) // returns 9
// s(2, 6) // returns 8

// // But the 4th time it returns a default message 'hmm, I don't know!'
// s(1, 6) // returns 'hmm, I don't know!'

// // Each consecutive odd call returns add's expected output
// s(1, 5) // returns 6

// // Each consecutive even call doesn't work and returns 'hmm, I don't know!'
// s(1, 4) // returns 'hmm, I don't know!'

function sometimes(fn){

  let count = 0;
 
    return function(a,b){
      count++;
      if (count < 3 || count%2 != 0){
        return fn(a,b)
      } 
     return `hmm, I don't know!`
    }   
}




// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  if (this.length == 0) return true;
  let myStr = JSON.stringify(this)
  if (myStr.toUpperCase() == myStr) return true;
  return false 
}



//  Array Helpers

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

Array.prototype.square = function() {
  return this.map(item=> item*=item)
}
Array.prototype.cube = function() {
  return this.map(item=> item**3)
}
Array.prototype.average = function() {
 return  this.length == 0 
         ? NaN 
         : (this.reduce((current,item)=>current+=item,0))/this.length
}
Array.prototype.sum = function() {
  return this.reduce((current,item)=>current+=item,0)
}
Array.prototype.even = function() {
   return this.filter(item=> item%2 == 0)
}
Array.prototype.odd = function() {
  return this.filter(item=> item%2 != 0)
}

console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
console.log(numbers.cube());    // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum());     // must return 15
console.log(numbers.even());    // must return [2, 4]
console.log(numbers.odd());     // must return [1, 3, 5]