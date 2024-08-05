import { products } from '../data/product.js';

let productHTML = '';
products.forEach((product, productId) => {
	productHTML += `
    <div class="sec-box hide-product-${product.id}">
      <img
        src="${product.image}"
        alt=""
      />
      <div class="sec-4-star">
        <p>${product.name}</p>
        <div class="product-rating">
          <img
            src="images/ratings/rating-${product.rating.stars * 10}.png"
            alt="rating image"
            class="product-rating"
          />
        </div>
      </div>
      <div class="star-2">₵ ${(product.priceCents / 100).toFixed(2)} /day</div>
      <span class="section-4-line"></span>
      <p class="insure">
        ${product.keywords}
      </p>
      <button class="book-button">BOOK NOW</button>
    </div>
  `;
	productId = `${product.id}`;
	console.log(productId);
});

const id = products.productId;

const hideProduct = document.querySelector(`.hide-product-${id}`);
if (hideProduct.id === '54e0eccd-8f36-462b-b68a-8182611d9add') {
	hideProduct.classList.add('hide-item');
}
console.log(hideProduct);

document.querySelector('.js-products-containers').innerHTML = productHTML;
console.log(productHTML);
