const firstWords = ["awesome", "Easy", "corporate", "cool" ,
 "Go" , "smart", "clever", "professional", "quicke", "brilliant"];
const secondWords = ["turbo", "business", "recall", "loop",
 "solution", "dot", "hurry","digi", "4you", "4me" ];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const theStartupName = firstWords[(randomNumber)] + secondWords[(randomNumber)] ;
//testing the code 
console.log(`the start up name '${theStartupName}' contains ${theStartupName.length} characters`);
