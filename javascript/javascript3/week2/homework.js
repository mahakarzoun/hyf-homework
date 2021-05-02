//movies exercise 
async function getMovies() {
    const promise = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    const data = await promise.json()
    return data
}
getMovies()
// creat a bad movies 
async function getBadMovies() {
   const data = await getMovies()
    const moviesArray =  data.filter( movie => movie.rating < 5)
return moviesArray
}


async function twentiesBadMovis () {
const movie = await getBadMovies()
    const movies = movie.filter(movie => movie.year)
    return movies
}
twentiesBadMovis()

