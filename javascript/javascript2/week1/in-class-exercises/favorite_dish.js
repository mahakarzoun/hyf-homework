const favoriteDish = ['pasta', 'shawarma', 'pizza'];

const pageBody = document.querySelector('body');
const favUl = document.createElement('ul');
favUl.innerText = 'my favorite food';
pageBody.appendChild(favUl);

for (let i = 0; i < favoriteDish.length; i++) {
const list = document.createElement('li');
list.innerText = favoriteDish[i];
favUl.appendChild(list);
}

