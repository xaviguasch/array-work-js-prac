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

function getTotal(arr) {
  return arr.reduce((acc, word) => acc + word.length, 0)
}

console.log(getTotal(['Rabbit', 'Football', 'Cracking']))
