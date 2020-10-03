// que 1 

const theBody = document.querySelector('body')
const img = document.createElement('img') 
theBody.appendChild(img) 

 fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then ((data) => {
//const img = document.createElement('img')  // creat an image every 2 sec 
img.src = data.message
//theBody.appendChild(img) 
})

//que2  get a new image after 2 ssec 
setInterval(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then ((data) => {data.message 
    img.src = data.message // updating the src every 2 sec 
    //theBody.appendChild(img) 
    })
}, 2000)

// que 3 Get the list of al breeds from https://dog.ceo/api/breeds/list/all
function getdogBread () {
    return 
fetch('https://dog.ceo/api/breeds/list/all') // as a call back functio not sdecaring as a variable 
.then((response) => response.json())
.then((data) => {
    console.log('this code is updating')
    dogBreads = 
 Object.keys(data.message))
})
}//console.log(data)
/*fetch('https://dog.ceo/api/breeds/list/all')
.then((response) => response.json())
.then((data) => {data.message.key
    const ul = document.createElement('ul')
    theBody.appendChild(ul)
    const arr = []
    const li = document.createElement('li')
    li.forEach(element => {
        
    });
})

const ul = document.createElement('ul')
.forEach(element => {
    
});

ul.innerHTML = data.message.key
theBody.appendChild(ul) */


// que 4 
const randomNumber = Math.floor(Math.random()*Math.floor(94))