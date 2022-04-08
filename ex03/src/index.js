// Only change code below this line
function rangeOfNumbers(startN, endN) {
  if (startN === endN) {
    return [startN];
  } else if (startN > endN) {
    return "The starting number will always be less than or equal to the ending number";
  } 
  return [startN].concat(rangeOfNumbers(startN + 1, endN));
}

console.log(rangeOfNumbers(1, 7));
// Only change code above this line
module.exports = rangeOfNumbers;

