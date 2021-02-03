// ARRAY WORK!

// Using "map" write a function that converts farenheit to celcius.
// eg: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]

function getCelcius(arr) {
  return arr.map((temp) => ((temp - 32) * 5) / 9)
}

console.log(getCelcius([23, 140, 212, 41]))
