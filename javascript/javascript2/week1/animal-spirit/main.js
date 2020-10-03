// functions 
function getAnimalNumber() {
  let min = 0;
  let max = 6;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAnilmalTraitsIndex() {
  let min = 0;
  let max = 3;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getYourSpiritualAnimal() {
  let animalIndex = getAnimalNumber();
  let TraitsIndex = getAnilmalTraitsIndex();
  let spices = spiritualtraits[animalIndex].traits[TraitsIndex];
  let animalName = spiritualtraits[animalIndex].name;
  return `${spices} ${animalName}`
}

/*function savingData () {
  let  input = document.getElementById("username").value; //??
alert(input);
}*/

// variables 
const spiritualtraits = [
  { name: 'fox', traits: ['secretive', 'charming', 'Sneaky', 'curious'] },
  { name: 'turtle', traits: ['quiet', 'shy', 'sensitive', 'wise'] },
  { name: 'butterfly', traits: ['optimistic', 'elegent', 'impulsive', 'talkative'] },
  { name: 'bear', traits: ['thoughtful', 'funny', 'goofy', 'angry'] },
  { name: 'owl', traits: ['Indecisive', 'observant', 'Mindful', 'Introverted'] },
  { name: 'horse', traits: ['Energetic', 'fearful', 'stubborn', 'free spirit'] },
  { name: 'dove', traits: ['Trustworthy', 'Easygoing', 'Dependent', 'Predictable'] }
]

//setting up the event 
let bodyPage = document.querySelector("body")
let userInput = document.getElementById('username');
let btn = document.getElementById("genbutton");
 btn.addEventListener("click", function v() {
  let output = document.createElement('p')
  output.innerHTML= "username" + " the " + getYourSpiritualAnimal(); 
});