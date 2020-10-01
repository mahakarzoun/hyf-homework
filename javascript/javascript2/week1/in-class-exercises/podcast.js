const podcasts = [{
    name: 'The mystery  of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

const pageBody = document.querySelector('body');
const heading = document.createElement('h1');
heading.innerHTML = "The prodcast"
pageBody.appendChild(heading);

const podcastsUlist = document.createElement('ul');
pageBody.appendChild(podcastsUlist);

for (let i = 0; i < podcasts.length; i++) {
    let podcastsList = document.createElement('li');
    podcastsUlist.appendChild(podcastsList);
    const prodcastName = document.createElement('h2')
    prodcastName.innerHTML = podcasts[i].name;
    podcastsList.appendChild(prodcastName);

    if (podcasts[i].imgUrl) {
        let img = document.createElement('img');
        img.src = podcastsList[i].imageUrl;
        podcastsList.appendChild(img);
    }
    podcastsUlist.appendChild(podcastsList);
}

// image inserter
function imageInserter(imageUrl, elementToAppendImageTo) {
    let anImage = document.createElement('img');
    anImage.src = imageUrl;
    anImage.style.width = '300px';
    return elementToAppendImageTo.appendChild(anImage);
}
imageInserter('https://picsum.photos/536/354', document.querySelector('body'))

//simple eventlistener
const btnsDiv = document.createElement('div');
pageBody.appendChild(btnsDiv);
const button = document.createElement('button');
button.innerHTML = 'click the button !';


button.addEventListener('click', () => {
    button.innerHTML = 'Button clicked!';
});
btnsDiv.appendChild(button);

// dark mode light mode
const anotherButton = document.createElement('button');
anotherButton.innerText = 'change mode';


function changeColor() {
    pageBody.classList.toggle("dark-mode");
}

anotherButton.addEventListener ("click", changeColor)
btnsDiv.appendChild(anotherButton);