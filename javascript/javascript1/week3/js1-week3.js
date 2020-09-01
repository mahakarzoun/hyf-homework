 function getTravelTime (travelInformation){
  return  `${timeInHours} hours and ${Math.floor(time % timeInHours * 60) } minutes`;
}


function logoutSeriesText () {
   for  (let i = 0; i < seriesDuration.length; i++) { 
   const sumOfHours = seriesDuration[i].days*24 + seriesDuration[i].hours + seriesDuration[i].minutes/60 ; 
   const precentageOfTheHours = (sumOfHours/701265.022)*100;
   const roundedProcentage = precentageOfTheHours.toFixed(4);
 console.log(`${seriesDuration[i].title} took ${roundedProcentage}% of your life`);
   } 
}


//NOnoN0nOYes
function saveNote(content, id) {
   if (typeof content !='string'){
      console.log('content must be a string')
    return;
   } else if (typeof id !== 'number') {
      console.log('content must be a string');
   }
   const note = notes.filter(note => note.id == id );
    if (note.length !==0) {
      console.log(`eror: id: ${id} is already in use`);
   } else { 
   notes.splice(id-1,0,{'content':content, 'id': id});
   return (notes);
   }
}
function getNote(id) {  // excutes just from  i = 0 , read the first element 
   for (let i = 0; i < notes.length; i++){       
     if (id === (notes[i].id)) { 
      return(notes[i]);              
   } else {
      return `id: ${id} doesn't exist`; 
   }
 }
}


function logOutNotesFormatted() {
   let results = [];
   for (let i = 0; i < notes.length; i++){
   results.push(`The note with id: ${notes[i].id}, has the following note text:${notes[i].content}`);
   } 
   return results.join('/n');
}

// homework 1 (Item array removal)
let names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad' ; 
for (let i = 0; i < names.length; i++) {
    if (names[i]=== nameToRemove) {
        console.log(names.splice(i, 1));
   }
}
console.log(names); // log out  ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


// homework2 (When will  be there)
const travelInformation = {
    speed: 50,
    destinatioDistance : 432,
};
const time = travelInformation.destinatioDistance / travelInformation.speed;
const timeInHours = Math.floor(time);
const travelTime = getTravelTime (travelInformation);
console.log(travelTime);


//  homework3 (series duration of my life )
let seriesDuration = [
 {
    title:'Game of thrones',
    days:3,
    hours:1,
    minutes:0,
 },
 {
    title:'Sopranos',
    days:3,
    hours:14,
    minutes:0,
 },
 {
    title:'The Wire',
    days:13,
    hours:14,
    minutes:0,
 }
]

const myFavSeries = {
    title:'Friends',
    days:4,
    hours:2,
    minutes:20,
};  
seriesDuration.push(myFavSeries);
logoutSeriesText ();


//  homework  4 (Smart-ease)
const notes = [];
saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
console.log(getNote(1));
logOutNotesFormatted();