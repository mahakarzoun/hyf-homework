function weatherWear(temperature) {
if (temperature <= 15 ) {
  return 'stay worm and wear a jacket';
} 
else if  (temperature > 15 && temperature <= 30) {
  return 'injoy weather and wear shorts a t-shirt';
}
}
console.log(weatherWear(15));
