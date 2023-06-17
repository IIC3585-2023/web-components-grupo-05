import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MyProduct extends LitElement {

  static properties = {
    name: {type: String},
    price: {type: Number},
    image: {type: String},
    discount: {type: Number},
    stars: {type: Number},
    maxstars: {type: Number}
  }

  constructor() {
    super();
    this.name = '';
    this.price = 0;
    this.image = '';
    this.discount = 0;
    this.stars = 0;
    this.maxstars = 0;
  }

  static styles = css`
  .product {
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
  }
  
  .product img {
    width: 200px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .product-name {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .product-price, .product-discount {
    margin-bottom: 5px;
  }
  
  .product-rating {
    color: #ffd700; /* Gold color for stars */
    font-size: 20px;
  }
  .image-container{
    position: relative;
  }
  .product-discount{
    position: absolute;
    top: 0;
    right: 0;
    background-color: #0AB9C4;
    color: white;
    padding: 5px;
    font-size: 20px;
    border-radius: 10px;
  }
  .product-price{
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
  .product-name{
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }`;

  render() {
    return html`
      <div class="product">
      <div class="image-container">
        <img class="product-image" src="${this.image}" alt="Product Photo">
        ${this.discount ? html`<p class="product-discount">Descuento: ${this.discount}%</p>`: ''}
      </div>
        <h3 class="product-name">${this.name}</h3>
        <p class="product-price">$${this.price}</p>
        <div class="product-rating">
          ${"✭".repeat(this.stars)+"✩".repeat(this.maxstars - this.stars)}
        </div>
      </div>
    `;
  }
}
customElements.define('product-component', MyProduct);