const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const danishSpecialLetters = [ 'å', 'ø', 'æ' ];

// calculat the danish special letters in the array 
function getTheShortestWord (danishWords) {
    let shortest = danishWords.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, danishWords[0]);
    return shortest  // correct ?
    }
getTheShortestWord(danishWords)
    
//another way to solve this using sort() method
function getTheShortestWord (danishWords) {
let sortedDanishWords = danishWords.sort((a, b) => a.length - b.length);
    return sortedDanishWords[0];
}
getTheShortestWord(danishWords)


// find and count the Danish letter 
let å = [];
let totalÅ = å.length
const danishString = 'Jeg har en blå bil';

function getDanishLetter(danishString) {
 danishString.split('');
 for (let i = 0; i < danishString.length ; i++) {
    if (danishString.includes(danishSpecialLetters[0])) {
    å.push(danishString[i]);
      return {'total': totalÅ, 'å': totalÅ}
    }
  }
}
// after i found about match() and regExp
const danishString2 = 'Blå grød med røde bær';
const hasÅ = danishString2.match(/å/gi).length;
const hasØ = danishString2.match(/ø/gi).length;
const hasÆ = danishString2.match(/æ/gi).length;
const total = hasÅ + hasÆ + hasØ;

function getDanishLetter2(danishString2) {
    const total = hasÅ + hasÆ + hasØ;
    return {'total': total, 'æ': hasÆ, 'ø': hasØ, 'å': hasÅ};
}
function getDanishLetter2(danishString2)


