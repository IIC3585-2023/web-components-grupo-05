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

  firstUpdated() {
    const textElement = this.shadowRoot.querySelector('.product-name');
    textElement.addEventListener('mouseover', () => {
      textElement.title = textElement.textContent;
    });
    this.discountPrice = Math.floor(this.price - (this.price * this.discount / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.price = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }



  static styles = css`
  .product {
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    cursor: default;
  }

  .product img {
    height: 200px;
    width: auto;
    margin-bottom: 10px;
  
  }
  
  .product-name {
    font-size: 18px;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
  .product-price-with-discount{
    text-decoration: line-through;
    font-weight: normal;
  }
  .product-name{
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
  .price-container{
    height:100px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  `;

  render() {
    return html`
      <div class="product">
      <div class="image-container">
        <img class="product-image" src="${this.image}" alt="Product Photo">
        ${this.discount ? html`<p class="product-discount">Descuento: ${this.discount}%</p>`: ''}
      </div>
        <h3 class="product-name">${this.name}</h3>
        <div class="price-container">
        ${this.discount ? html`<span class="product-price">$${this.discountPrice}</span>`: ''}
        <span class="product-price ${this.discount ? "product-price-with-discount" : ""}">$${this.price}</span>
        </div>
        <div class="product-rating">
          ${"✭".repeat(this.stars)+"✩".repeat(this.maxstars - this.stars)}
        </div>
      </div>
    `;
  }
}

customElements.define('product-item', MyProduct);