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
