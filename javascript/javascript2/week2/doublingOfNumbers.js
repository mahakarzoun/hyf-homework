
function getDoubleOddNumber () {
  return ` the doubled numbers are ${doubledOddNumber}`
}

const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter (number => number % 2);
let doubledOddNumber = oddNumbers.map(x => x*2)

getDoubleOddNumber ();
