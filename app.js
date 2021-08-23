// import functions and grab DOM elements

// initialize global state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
import { sneaker } from './data.js';
import { shoeBuy } from './renderUtils.js';

const productList = document.getElementById('productList');
const buyShoe = shoeBuy(sneaker[0]);

productList.append(buyShoe);
