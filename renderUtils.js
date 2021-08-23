
export function shoeBuy(sneaker) {
    const listItem = document.createElement('li');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const descriptionP = document.createElement('p');
    const categoryP = document.createElement('p');
    const priceP = document.createElement('p');
    const addButton = document.createElement('button');




    h2.classList.add('name');
    img.classList.add('shoe-image');
    descriptionP.classList.add('description');
    categoryP.classList.add('category');
    priceP.classList.add('price');
    addButton.classList.add('addToCart');

    h2.textContent = sneaker.name;
    img.src = sneaker.image;
    descriptionP.textContent = sneaker.description;
    categoryP.textContent = sneaker.category;
    priceP.textContent = sneaker.price;
    addButton.value = sneaker.id;
    addButton.textContent = 'Add to Cart';

    listItem.append(h2, img, descriptionP, categoryP, priceP, addButton);
    return listItem;
}
