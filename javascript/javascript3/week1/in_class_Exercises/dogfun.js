// variables 
const q1 = document.querySelector('#question1')
const q2 = document.querySelector('#question2')
const q3 = document.querySelector('#question3')
const q4 = document.querySelector('#question4')

let getRandomImage = () =>
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())

// 1 get a random image
function renderImage() {
    getRandomImage().then((data) => {
        const img = document.createElement('img')
        img.src = data.message
        q1.appendChild(img)
    })
}
renderImage()



//que2  get a new image after 2 ssec 
function renderRandomImage() {
    getRandomImage()
        .then((data) => {
            const img = q2.querySelector('img')
            img.src = data.message
        })
}
q2.appendChild(document.createElement('img'))
setInterval(renderRandomImage, 4000);




// que 3 Get the list of all breeds from https://dog.ceo/api/breeds/list/all
const getdogBreed =
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())

function renderDogBreads() {
    const p = document.createElement('p')
    const ul = document.createElement('ul')
    p.innerText = 'List of The most famouse dogs breads'
    q3.appendChild(p)
    q3.appendChild(ul)
    getdogBreed.
        then((data) => {
            const arr = Object.keys(data.message);
            arr.forEach(element => {
                const li = document.createElement('li')
                li.innerText = `${element}`
                ul.appendChild(li)
            })
        })
}
renderDogBreads();



// que 4 
const renderDogInfo = () => {
    getdogBreed
        .then(data => {
            const array = Object.keys(data.message)
            let randomNumber = Math.floor(Math.random() * 96)
            let randomBreedName = array[randomNumber]
            const image = q4.querySelector('img');
            const p = q4.querySelector('p');
            fetch(`https://dog.ceo/api/breed/${randomBreedName}/images/random`)
                .then((response) => {
                    if (response.ok)
                       return response.json()
                    else
                        throw new Error(response.status);
                })
                .then((data) => {
                    p.innerText = `${randomBreedName}`
                    image.src = data.message
                }).catch(error => {
                    p.innerText = 'Server Error ' + error.message
                })
        })
}
q4.appendChild(document.createElement('img'))
q4.appendChild(document.createElement('p'))

setInterval(renderDogInfo, 4000);

