import { renderTableRows } from './render-table.js';
import { cart } from './cart-data.js';
import { sneaker } from '../data.js';
import { calcOrderTotal } from './utils.js';

for (let cartItem of cart) {
    const tr = renderTableRows(cartItem);
    const tbody = document.querySelector('tbody');

    tbody.append(tr);
}

const total = calcOrderTotal(sneaker, cart);
console.log(total);
const totalTd = document.getElementById('total');

totalTd.textContent = total;
