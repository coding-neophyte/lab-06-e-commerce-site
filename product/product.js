import { sneaker } from '../data.js';
import { shoeBuy } from '../renderUtils.js';

const productList = document.getElementById('productList');
const buyShoe = shoeBuy(sneaker[0]);

productList.append(buyShoe);
