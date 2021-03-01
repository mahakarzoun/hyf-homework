const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const danishSpecialLetters = [ 'å', 'ø', 'æ' ];

// calculat the danish special letters in the array 
function getTheShortestWord (danishWords) {
    let shortest = danishWords.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, danishWords[0]);
    return shortest  // correct ?
    }

//another way to solve this using sort() method
function getTheShortestWord1 (danishWords) {
let sortedDanishWords = danishWords.sort((a, b) => a.length - b.length);
    return sortedDanishWords[0];
}
// calling the functions
console.log(getTheShortestWord(danishWords))
getTheShortestWord1(danishWords)


// find and count the Danish letter 
let å = [];
let ø = [];
let æ = [];
let total1 = å.length + ø.length + æ.length
const danishString = 'Blå grød med røde bær';

function getDanishLetter(danishString) {
  let splitedString = danishString.split('');
 for (let i = 0; i < splitedString.length ; i++) {
    if (splitedString.includes(danishSpecialLetters[0])) {
      å.push(splitedString[i]);
    }
    else if (splitedString.includes(danishSpecialLetters[1])) {
      ø.push(splitedString[i]); 
    }else if (splitedString.includes(danishSpecialLetters[2])) {
      æ.push(splitedString[i]); 
    }
  return {'total':total1, 'å': å.length, "ø" : ø.length, "æ": æ.length}
  }
}

// after i found about match() and regExp
const hasÅ = danishString.match(/å/gi).length;
const hasØ = danishString.match(/ø/gi).length;
const hasÆ = danishString.match(/æ/gi).length;
const total2 = hasÅ + hasÆ + hasØ;

function getDanishLetter2 (){
    const total = hasÅ + hasÆ + hasØ;
    return {'total': total, 'æ': hasÆ, 'ø': hasØ, 'å': hasÅ};
}
// calling the functions
console.log(getDanishLetter(danishString))
getDanishLetter2()


