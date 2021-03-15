//1. short movie stitle array 
 import {movies} from './moviesList'

const shortFilmsTitle = movies.filter(element => element.title.length < 12)
console.log (shortFilmsTitle);

// 2.long moviestitle array  
const longFilmsTitle = movies.filter(element => element.title.length >= 12)
console.log (longFilmsTitle);

//3.number of movies
const eightiesMovies = movies.filter( element => element.year >= 1980 && element.year <= 1989);
console.log(eightiesMovies.length)

// 4. add a tag key  
const movieRating = movies.filter(element =>element.rating)
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
const words = new RegExp(/benjamin|surfer|alien/ig);
return element.match(words);
})
const numberOfWords = searchedWords.length;
console.log(numberOfWords);

//7.
//1. divide the titles into a array of strings  check 
//if the array has to indexes with the same value 
//put it in a seperet array 

const splittedWords = arrOfTitles.map(element => element.split(' '));
let arr = splittedWords.forEach( element => element.filter((item,index) => 
element.indexOf(item) != index));
console.log(splittedWords)

//8 Average Rating
//!. filter and map to excute a  rating string
// reduce method 

const ratingArray = newMovieArr.filter(element => element.rating).map(element => element.rating )
console.log(ratingArray)
const reducer = (preValue, currValue) => ((preValue + currValue) / ratingArray.length)
const averageRating = +ratingArray.reduce(reducer).toFixed(2)
console.log(averageRating);