//peter's house
let houseWide=8;
let houseDeep=10;
let houseHeight=10; 
let volumeInMeters=houseHeight*houseDeep*houseWide;

let gardenSizeInM2=100; 
const peters_housePrice= 2500000;
let housePrice= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (peters_housePrice>housePrice){
console.log('Peter is paying too much');
}
else { console.log('Peter is paying too little');
}

//Julia's house
houseWide=5;
houseDeep=11;
housdeHeight=8;
gardenSizeInmeter2=70; 
volumeInMeters=houseHeight*houseDeep*houseWide;
const Julias_housePrice= 1000000;

housePrice= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (Julias_housePrice>housePrice){
console.log('Julia is paying too much');
}
else { console.log('Julia is paying too little');
}
