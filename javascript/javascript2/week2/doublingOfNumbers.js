
function getDoubleOddNumber () {
  let result = doubledOddNumber;
  return result
}

const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter (number => number % 2);
let doubledOddNumber = oddNumbers.map(x => x*2)

console.log("The doubled numbers are", getDoubleOddNumber());
