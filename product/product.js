import { sneaker } from '../data.js';
import { shoeBuy } from '../renderUtils.js';

const productList = document.getElementById('productList');
// const placeOrderButton = document.getElementById('buy-now');

for (let shoeType of sneaker) {
    const newShoe = shoeBuy(shoeType);
    productList.append(newShoe);
}
