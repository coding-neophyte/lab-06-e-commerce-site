import { renderTableRows } from './render-table.js';
// import { cart } from './cart-data.js';
import { sneaker } from '../data.js';
import { calcOrderTotal, getCart } from './utils.js';
import { clearCart } from './utils.js';
const cart = getCart();
const placeOrderButton = document.getElementById('buy-now');
console.log(cart);
for (let cartItem of cart) {
    const tr = renderTableRows(cartItem);
    const tbody = document.querySelector('tbody');

    tbody.append(tr);
}

const total = calcOrderTotal(sneaker, cart);
console.log(total);
const totalTd = document.getElementById('total');

totalTd.textContent = total;

placeOrderButton.addEventListener('click', () => {
    alert('Thank you for shopping with us');
    clearCart();
});
