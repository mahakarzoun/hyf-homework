const dogYearOfBirth = 2017;
let dogYearFutures = 2027;
const humanYear = dogYearFutures-dogYearOfBirth;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let shouldShowResultInDogYear = true;

if (shouldShowResultInDogYear) {
console.log(`your dog will be ${dogYear} dog years old in ${dogYearFuture}`)
}
else {
console.log(`your dog will be ${humanAge} years old in ${dogYearFuture}`)
}

shouldShowResultInDogYear = false;
if (shouldShowResultInDogYear) {
  console.log(`your dog will be ${dogYear} dog years old in ${dogYearFuture}`); 
}
else {
  console.log(`your dog will be ${humanAge} dog years old in ${dogYearFuture}`);
}
