function weatherWear(temperature) {
if (temperature <= 15 ) {
  return 'stay worm and wear a jacket';
} 
else if  (temperature > 15 && temperature <= 25) {
  return 'injoy weather and wear shorts a t-shirt';
}else {
  return 'it\'s better to wear a hat and sunglasses '
}
}

console.log(weatherWear(15));
console.log(weatherWear(25));
console.log(weatherWear(30));
