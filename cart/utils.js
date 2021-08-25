export function findById(sneakerArray, id) {
    for (let item of sneakerArray) {
        if (item.id === id) {
            return item;
        }
    }
}


export function itemTotal(price, quantity) {
    const total = price * quantity;
    return total;
}



export function calcOrderTotal(sneakerArray, cartArray) {
    let accumulate = 0;
    for (let shoeItem of cartArray) {
        const product = findById(sneakerArray, shoeItem.id);

        let total = product.price * shoeItem.quantity;
        accumulate = total + accumulate;


    }
    return accumulate;
}

export function getCart() {
    const grabCart = localStorage.getItem('CART');

    if (!grabCart) {
        return [];
    } else {
        const finalCart = JSON.parse(grabCart);

        return finalCart;
    }
}


export function setCart(cart) {
    const settingCart = JSON.stringify(cart);

    localStorage.setItem('CART', settingCart);
}




export function addItemToCart(id) {
    const shoeCart = getCart();
    const shoeInCart = findById(shoeCart, id);

    if (shoeInCart) {
        shoeInCart.quantity++;

    } else {
        const makeNewObject = { id: id, quantity: 1 };
        shoeCart.push(makeNewObject);


    }
    setCart(shoeCart);
}


export function clearCart() {
    localStorage.removeItem('CART');
    window.location = '../index.html';
}
