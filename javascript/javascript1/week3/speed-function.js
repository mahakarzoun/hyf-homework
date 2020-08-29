const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  let timeLow = travelInformation.destinationDistance / travelInformation.speed;

  function time (travelInformation) {
  let travelInHours = Math.floor(timeLow);
  let travelInMinuts = Math.floor((timeLow % travelInHours) * 60); 
    return travelInHours + ' hours ' + 'and ' + travelInMinuts + ' minuts';
  } 
  
 const travelTime = time(travelInformation);
 console.log(travelTime); 