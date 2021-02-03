// ARRAY WORK!

// Using "map" write a function that converts farenheit to celcius.
// eg: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]

// function getCelcius(arr) {
//   return arr.map((temp) => ((temp - 32) * 5) / 9)
// }

// console.log(getCelcius([23, 140, 212, 41]))

////////////////////////////////////////////////////////////////////

// Using "some" write a function that checks an array for a "falsey" value.
// eg: checkForFalsey([11, NaN, [], ["Angels"]]) => true

// function checkForFalsey(arr) {
//   return arr.some((el) => !el)
// }

// console.log(checkForFalsey([11, NaN, [], ['Angels']]))

////////////////////////////////////////////////////////////////////

// Using "reduce" write a function that will return the total number
// of characters in an array of strings.
// eg: getTotal(["Rabbit", "Football", "Cracking"]) => 22

// function getTotal(arr) {
//   return arr.reduce((acc, word) => acc + word.length, 0)
// }

// console.log(getTotal(['Rabbit', 'Football', 'Cracking']))

////////////////////////////////////////////////////////////////////

// Using "every" write a function that checks whether every number in an
// array is a square number.
// eg: checkSquared([9, 16, 81]) => true

// function checkSquares(arr) {
//   //   return arr.every((num) => Math.sqrt(num) % 1 === 0)

//   return arr.every((num) => Math.pow(Math.sqrt(num), 2) === num)
// }

// console.log(checkSquares([9, 16, 81]))

////////////////////////////////////////////////////////////////////

// Using an array method, write a function that returns the stirng
// elements of an array that have a given length or larger.
// eg: getWords(["Florida", "dog", "phone"]) => ["Florida", "Phone"]

// function getWords(arr, number) {
//   return arr.filter((word) => word.length >= number)
// }

// console.log(getWords(['Florida', 'dog', 'phone'], 5))

////////////////////////////////////////////////////////////////////

//  Using and array method, write a function that converts an array of cm values
// as strings, into an arrayof numbers.
// eg. getValues(["23cm", "5.6cm", "1000cm"]) => [23, 5.6, 1000]

// function getValues(arr) {
//   return arr.map((value) => parseFloat(value))
// }

// console.log(getValues(['23cm', '5.6cm', '1000cm']))

////////////////////////////////////////////////////////////////////

// Using "split" and "filter" write a function that counts the number of vowels
// in a sentence.
// eg: getVowelCount("In West Philadelphia, born and raised") => 12

function getVowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  const letters = str.split('')

  const extractedVowels = letters.filter((letter) => vowels.includes(letter))

  return extractedVowels.length
}

console.log(getVowelCount('In West Philadelphia, born and raised'))
