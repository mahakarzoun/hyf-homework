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


// functions 
function getAnimalNumber() {
  const max = spiritualtraits.length;
  return Math.floor(Math.random() * (max + 1));
}

function getAnilmalTraitsIndex() {
  const max = 3;
  return Math.floor(Math.random() * (max + 1));
}

function getYourSpiritualAnimal() {
  const animalIndex = getAnimalNumber();
  const TraitsIndex = getAnilmalTraitsIndex();
  const spices = spiritualtraits[animalIndex].traits[TraitsIndex];
  const animalName = spiritualtraits[animalIndex].name;
  return `${spices} ${animalName}`
}

function LogOut(e) {
  debugger
  const input = document.querySelector("input[name='username']");
  const name = input.value;
  const Animal = getYourSpiritualAnimal();
  let output = document.createElement('p')
  output.innerText = `${name} the ${Animal}`
  bodyPage.appendChild(output)
}


//setting up the event 
const bodyPage = document.querySelector("body")
const btn = document.querySelector("#genbutton");
btn.addEventListener("click", LogOut);