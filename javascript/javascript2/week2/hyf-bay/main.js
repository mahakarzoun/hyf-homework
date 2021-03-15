console.log("Script loaded");
const products = getAvailableProducts();
const ul = document.querySelector("ul");

const input = document.querySelector('input')
input.addEventListener('input', filterProducts)

function filterProducts(event) {
    const searchText = input.value
    const filteredProducts =
        searchText.length === 0 ?
            [] : products
                .filter(element => element.name.includes(searchText))
    renderProducts(filteredProducts);
}

function renderProducts(products) {
    // your code here
    ul.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
        ul.appendChild(li);
    });
}


