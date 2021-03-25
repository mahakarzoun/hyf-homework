const body = document.querySelector('body')
//cat
const data = fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(renderDogImages)


  function renderDogImages () {
  data.forEach((catFact) => {
      const h2 = document.createElement('h2')
      h2.innerHTML = catFact.text
      body.appendChild(h2)
    })
  }
  

/*const body = document.querySelector('body')
const data = fetch('http://api.open-notify.org/astros.json').then(
  (response) => response.json().then((data) => data.people.forEach(person =>  {
    const h2 = document.createElement('h2')
        h2.innerHTML = person.name
        body.appendChild(h2)  
  })
 )
)


const promise = fetch('http://api.open-notify.org/astros.json')
  .then(
    (response) => response.json()
      .then((data) => (renderName)
      )
  )

function renderName () {}
      {
        const h1 = document.createElement('h1')
        h1.innerHTML = `there are ${data.number} astronaut in space, they are`
        body.appendChild(h1)

        data.people.forEach((person) => {
          const h2 = document.createElement('h2')
          h2.innerHTML = person.name
          body.appendChild(h2)
        })
      }


/*
fetch.then (fetch the response) and then call json then (function (data))
we can call , then in the end
*/
