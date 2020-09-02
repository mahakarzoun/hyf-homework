const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
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
const podcastsUlist = document.createElement('ul');
podcastsUlist.innerText = 'The podcast';
pageBody.appendChild(podcastsUlist);

for (let i = 0; i < podcasts.length; i++) {
    let podcastsList = document.createElement('li');
    podcastsUlist.appendChild(podcastsList);
    const heading = document.createElement('h2')
    heading.innerHTML = podcasts[i].name;
    podcastsList.appendChild(heading);

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
const button = document.createElement('button');
button.innerHTML = 'click the button !';
button.style.cssText = 'width: 150px; height: 40px; color: blue; margin: 20px;';

button.addEventListener('click', () => {
    button.innerHTML = 'Button clicked!';
});
pageBody.appendChild(button);

// dark mode light mode
const anotherButton = document.createElement('button');
pageBody.appendChild(anotherButton);
anotherButton.innerText = 'light mode';
document.querySelector('anotherbutton');
anotherButton.addEventListener('click', function changeColor() {
    anotherButton.innerHTML = 'dark mode';
    pageBody.style.cssText = 'background: black; color: white';
});

pageBody.appendChild(anotherButton);
