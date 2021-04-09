const container = document.getElementById('mainPage')
let remove;
class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.imgSrc = image;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product)
    const totalProduct = document.getElementById('inBasket')
    totalProduct.innerText = `${shoppingCart.getsum()}` // excute 3  ??
    return this.products
  }

  removeProduct(product) {
    const found = this.products.find(pr => pr.name === product)
    this.products.splice(found, 1)
    return this.products
  }

  searchProduct(productName) {
    const found = this.products.filter(pr => pr.name.includes(productName))
    return found
  }

  getsum() {
    return this.products.length
  }

  getTotal() {
    const pricesArr = this.products.map(product => product.price)
    if (pricesArr != undefined) {
      const Subtotal = pricesArr.reduce((a, b) => a + b, 0)
      return Subtotal
    } else {
      return 0
    }
  }
  renderProducts() {
    container.innerHTML = ""
    const title = document.querySelector('.title')
    const totalProducts = document.querySelector('.totalProducts')
    totalProducts.innerText = ""
    title.appendChild(totalProducts)
    const search = document.getElementById('search')
    const value = search.value;
    const array = shoppingCart.searchProduct(value)
    array.forEach(pro => {
      const product = document.createElement('div')
      product.classList.add('product')
      container.appendChild(product)
      const image = document.createElement('img')
      image.classList.add('image')
      image.src = pro.imgSrc
      product.appendChild(image)
      const name = document.createElement('p')
      name.innerText = pro.name;
      product.appendChild(name)
      const price = document.createElement('p')
      price.innerText = `price: ${pro.price}`;
      product.appendChild(price);
      remove = document.createElement('button')
      remove.classList.add('removeSpan')
      remove.innerHTML = `<i class="fas fa-trash-alt"></i>`
      product.appendChild(remove)
    })
    totalProducts.innerText = `(${shoppingCart.getsum()})`;
  }

  getUser() { // 
     let api =  fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(renderUserName)
      return api 
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000, 'https://i.imgur.com/tGrnzjS.jpg');
const screen = new Product("flat-screen", 4000, 'https://i.imgur.com/tGrnzjS.jpg');
const mobile = new Product("huwawei ", 7000, 'https://i.imgur.com/lvZqpqD.jpg');
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(screen);
shoppingCart.addProduct(mobile);

const button = document.querySelector('.btn')

/*function renderUserName (response) {
let data = response
const name = document.getElementById('userName')
 name.innerText = `${data.username}` 
}*/

 function renderShoppingPage () {
  renderUserName()
  button.addEventListener('click', shoppingCart.renderProducts)
}


renderShoppingPage()