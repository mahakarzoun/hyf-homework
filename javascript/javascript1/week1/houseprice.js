//I assign the four variables with peter's house dimensions.
let height =10; //measured in meters
let depth = 10;
let width = 8;
let gardenSizeInM2 = 100;
let houseCost = 2500000; 
const volumeInMeters = height * width * depth;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice < houseCost) {
   console.log('your paying too much');
}
else if (housePrice === houseCost) {
   console.log('you have a good deal');
}
else {
   console.log('your paying too little');
}; 
// testing Julias's expenses by reassigning the variables
height = 8;
depth = 11, 
width = 5;
gardenSizeInM2 = 70;
houseCost = 1000000;

if (housePrice < houseCost) {
    console.log('your paying too much');
 }
 else if (housePrice === houseCost) {
    console.log('you have a good deal');
 }
 else {
    console.log('your paying too little');
 };
