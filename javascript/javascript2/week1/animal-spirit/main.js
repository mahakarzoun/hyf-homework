// functions 
function getAnimalNumber() {
  let max = spiritualtraits.length;
  return Math.floor(Math.random() * (max  + 1)) ;
}

function getAnilmalTraitsIndex() {
  let max = 3;
  return Math.floor(Math.random() * (max + 1)) ;
}

function getYourSpiritualAnimal() {
  let animalIndex = getAnimalNumber();
  let TraitsIndex = getAnilmalTraitsIndex();
  let spices = spiritualtraits[animalIndex].traits[TraitsIndex];
  let animalName = spiritualtraits[animalIndex].name;
  return `${spices} ${animalName}`
}



function LogOut (e) {
  debugger
  const input = document.querySelector("input[name='username']");
  const name = input.value;
  const Animal = getYourSpiritualAnimal();
  let output = document.createElement('p')
  output.innerText = `${name} the ${Animal}` 
  bodyPage.appendChild(output)
}
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
let btn = document.querySelector("#genbutton");
 btn.addEventListener("click",LogOut);