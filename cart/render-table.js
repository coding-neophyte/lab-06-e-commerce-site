import { findById } from './utils.js';
import { sneaker } from '../data.js';
import { itemTotal } from './utils.js';


export function renderTableRows(cartItem) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement('td');

    tr.classList.add('t-head');
    nameTd.classList.add('td-style');
    priceTd.classList.add('td-style');
    quantityTd.classList.add('td-style');
    totalTd.classList.add('total-price');

    const footWear = findById(sneaker, cartItem.id);

    nameTd.textContent = footWear.name;
    priceTd.textContent = footWear.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    quantityTd.textContent = cartItem.quantity;

    const shoeTotal = itemTotal(footWear.price, cartItem.quantity);
    totalTd.textContent = shoeTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


    tr.append(nameTd, priceTd, quantityTd, totalTd);


    return tr;

}
