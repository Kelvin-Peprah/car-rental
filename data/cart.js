export const cart = [];

export function addToCart(productId) {
	let matchingProduct;
	cart.forEach((cartItem) => {
		if (productId === cartItem.productId) {
			matchingProduct = cartItem;
		}
	});

	if (matchingProduct) {
		matchingProduct.quantity++;
	} else {
		cart.push({
			productId,
			quantity: 1,
		});
	}
}
