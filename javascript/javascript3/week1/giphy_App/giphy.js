//select the to inputs 
const page = document.querySelector('body')
const limit = document.getElementById('nrOfGifs')
const search = document.getElementById('expression')
const button = document.getElementById('button')
const gifsList = document.getElementById('gifsList')
const message = document.createElement('p')
message.innerText =""
page.appendChild(message)

// fetch for the api 
function renderGiphys(word, numberOfGif) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=faB1okDXeXCUpSXI6pzdbHaomTMnHBZ3&q=${word}&limit=${numberOfGif}&offset=0&rating=g&lang=en`)
        .then(response => {
                 return response.json()
 
        })
        .then((data) => {
            gifsList.classList.add('scrollDiv')
            data.data.forEach(obj => {
                const gif = document.createElement('img')
                gif.src = obj.images.original.url
                gif.classList.add('image')
                gifsList.appendChild(gif)
            })
        })
}
// add eventlistiner to the button 
button.addEventListener('click', () => {
    message.innerText = ""
    gifsList.innerText = "";
    const word = search.value
    const numberOfGif = limit.value
    if (word === "" || numberOfGif === "" ){
        message.innerText =" please fill out the required field"
        } else 
    renderGiphys(word, numberOfGif)
})