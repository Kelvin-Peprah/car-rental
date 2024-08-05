import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/product.js';

let productHTML = '';
products.forEach((product) => {
	productHTML += `
    <div class="sec-box product-id-${product.id}">
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
      <button class="book-button js-book-button" data-product-id="${
				product.id
			}">
        BOOK NOW
      </button>
    </div>
  `;
});

document.querySelector('.js-products-containers').innerHTML = productHTML;

/*hides the last product element*/
products.forEach((product) => {
	const productId = `${product.id}`;

	const hideProduct = document.querySelector(`.product-id-${productId}`);
	if (productId === '54e0eccd-8f36-462b-b68a-8182611d9add') {
		hideProduct.classList.add('hide-item');
	}
});



function updateCartquantity() {
	let cartQuantity = 0;
	cart.forEach((cartItem) => {
		cartQuantity += cartItem.quantity;
	});

  document.querySelector('.js-cart-no').innerHTML = cartQuantity;
}

/*add to rental cart */
document.querySelectorAll('.js-book-button').forEach((bookButton) => {
	bookButton.addEventListener('click', () => {
		const productId = bookButton.dataset.productId;

		addToCart(productId);
		updateCartquantity();
	});
});
