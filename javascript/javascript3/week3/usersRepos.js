function fetchGitApi(user) {
    const body = document.querySelector('body')
    fetch(`https://api.github.com/search/repositories?q=user:${user}`)
        .then(response => response.json())
        .then(data => {
            const ul = document.createElement('ul')
                    ul.innerHTML = `<h3>${user} repos :</h3>`
                    body.appendChild(ul)
                data.items.forEach(element => {
                    const li = document.createElement('li')
                    li.innerText = `${element.name} : ${element.html_url} `
                    ul.appendChild(li)
                })
        })
}  

Promise.all([fetchGitApi('NatsGt'),fetchGitApi('islam-fawzy25'),fetchGitApi('Gohar33')]);
