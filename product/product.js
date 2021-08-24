import { sneaker } from '../data.js';
import { shoeBuy } from '../renderUtils.js';

const productList = document.getElementById('productList');

for (let shoeType of sneaker) {
    const newShoe = shoeBuy(shoeType);
    productList.append(newShoe);
}
