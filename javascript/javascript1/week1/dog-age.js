const dogYearOfBirth=2017;
let dogYearFutures=2027;
let humanYear=dogYearFutures-dogYearOfBirth;

Console.log(humanYear)
var shouldShowResultInDogYear=true;

if (shouldShowResultInDogYear) {
console.log('your dog will be'+ humanYear*7+'dog years old ')
}
else {
console.log('your dog will be'+ humanYear+'human years old')
}