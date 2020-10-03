/*a language that we can use it for more languages */
// then the return value of thde promise  (response)
//json(). = perse the data into the js 



//const data = fetch  ('https://cat-fact.herokuapp.com/facts/random?amount=3').then((response)=> response.json().then((data) => console.log(data)))

/*  
logs out 
Response {type: "cors", url: "https://cat-fact.herokuapp.com/facts/random?amount=3", redirected: false, status: 200, ok: true, …}body: (...)bodyUsed: falseheaders: Headers {}ok: trueredirected: falsestatus: 200statusText: "OK"type: "cors"url: "https://cat-fact.herokuapp.com/facts/random?amount=3"__proto__: Response
*/



/*const data = fetch  ('https://cat-fact.herokuapp.com/facts/random?amount=3').then((response)=> response.json().then((data) => data.forEach((catFact)=> {
    const h2 = document.createElement
}
))
*/
/*
const body = document.querySelector('body')
const data = fetch('https://cat-fact.herokuapp.com/facts/random?amount=3').then(
  (response) =>
    response.json().then((data) =>
      data.forEach((catFact) => {
        const h2 = document.createElement('h2')
        h2.innerHTML = catFact.text
        body.appendChild(h2)
      })
    )
)*/


/*const body = document.querySelector('body')
const data = fetch('http://api.open-notify.org/astros.json').then(
  (response) => response.json().then((data) => data.people.forEach(person =>  {
    const h2 = document.createElement('h2')
        h2.innerHTML = person.name
        body.appendChild(h2)  
  })
 )
)*/


const body = document.querySelector('body')
const data = fetch('http://api.open-notify.org/astros.json')
.then(
  (response) => response.json()
.then((data) =>  {
    const h1 = document.createElement('h1')
        h1.innerHTML = `there are ${data.number} astronaut in space, they are`
        body.appendChild(h1) 
        
        data.people.forEach((person) =>  {
            const h2 = document.createElement('h2')
            h2.innerHTML = person.name
            body.appendChild(h2)  
       })
    })


/*
fetch.then (fetch the response) and then call json then (function (data))
we can call , then in the end 
*/
