const movies = [{"title": "'7   1","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},{"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},{"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},{"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},{"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},{"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},{"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220}];

// short moviestitle array 
const shortFilmsTitle = movies.filter(element => element.title.length < 12)
console.log (shortFilmsTitle);

// long moviestitle array  
const longFilmsTitle = movies.filter(element => element.title.length >= 12)
console.log (longFilmsTitle);

// number of movies
const eightiesMovies = movies.filter( element => {
    if (element.year >= 1980 && element.year <= 1989)
    return element;
});
console.log(eightiesMovies.length)

// extra key 
const movieRating = movies.filter(element =>element.rating)
const moviesListWTag = movieRating.map(element => ({ element, 'tag': ""})
);
// or  
console.log(moviesListWTag);
const newMovieArr = movieRating.map(element => {
    if (element.rating >= 7 ) {
        return Object.assign(element, {tag: "good"})
    }else if (element.rating < 7 && element.rating >= 4) {
        return Object.assign(element, {tag: "Average"})
    }else if (element.rating < 4) {
        return Object.assign(element, {tag: "Bad"})
    }
});
console.log(newMovieArr);
 
//5. chaining filter then map 
const specificRatingArr = newMovieArr.filter(element => element.rating < 6).map(element => element.rating )
console.log(specificRatingArr);

//6count the number
const arrOfTitles = newMovieArr.filter (element => element.title).map(element => element.title);
const searchedWords = arrOfTitles.filter(element => {
const words = /benjamin|surfer|alien/ig;
return element.match(words);

})
const numberOfWords = searchedWords.length;
console.log(numberOfWords);
/*const arrOfTitles = newMovieArr.filter (element => element.title).map(element => element.title);
const searchedWords = arrOfTitles.filter(element => {
const words = /71|surfer|alien/ig;
let search = element.match(words);
return  search.length;
})

console.log(searchedWords); Cannot read property 'length' of null*/

//7.
//1. divide the titles into a array of strings  check 
//if the array has to indexes with the same value 
//put it in a seperet array 

const splittedWords = arrOfTitles.map(element => element.split(' '));
let arr = splittedWords.forEach( element => element.filter((item,index) => 
element.indexOf(item) != index));


console.log(splittedWords)

/*let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)*/
//OR 

  /*var array = ["q", "w", "w", "e", "i", "u", "r"],
    seen = array.filter((s => v => s.has(v) || !s.add(v))(new Set));

console.log(seen);
 */

//8 Average Rating
//!. filter and map to excute a  rating string
// reduce method 

const ratingArray = newMovieArr.filter(element => element.rating).map(element => element.rating )
console.log(ratingArray)
const reducer = (preValue, currValue) => ((preValue + currValue) / ratingArray.length)
const averageRating = +ratingArray.reduce(reducer).toFixed(2)
console.log(averageRating);