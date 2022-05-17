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

  // try to solve with regex

  