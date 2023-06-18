import { products } from './data.js';

products.forEach(product => {
  const productElement = document.createElement('product-item');
  productElement.setAttribute('name', product.name);
  productElement.setAttribute('price', product.price);
  productElement.setAttribute('image', product.image);
  productElement.setAttribute('discount', product.discount);
  productElement.setAttribute('stars', product.stars);
  productElement.setAttribute('maxstars', product.maxStars);
  document.getElementById("products-container").appendChild(productElement);
});