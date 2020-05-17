const firstWords = ["awesome", "Easy", "corporate", "cool" ,
 "Go" , "smart", "clever", "professional", "quicke", "brilliant"];
const secondWords = ["turbo", "business", "recall", "loop",
 "solution", "dot", "hurry","digi", "you", "me" ];

const randomNumber = Math.floor(Math.random() * 10) + 0;

console.log ( "starts up names: " + firstWords[randomNumber] +
 secondWords[randomNumber] + " contains " +
  (firstWords.length + secondWords.length ) + " characters");
