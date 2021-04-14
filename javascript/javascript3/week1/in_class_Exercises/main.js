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