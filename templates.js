function getTemplateMenu(dish, i) {
    return `
    <div class="menu-item">
        <div class="item-header">
            <div class="item-details">
                <h2>${dish.name}</h2>
                <p>${dish.price.toFixed(2)} €</p>
                <p>${dish.zutaten}</p>
            </div>
            <button class="basket-button" onclick="addDishToBasket(${i})">+</button>
        </div>
    </div>
    `;
}

function getTemplateBasket(i) {
    let item = basket[i];
    return `
    <div class="basket-item">
        <span>${item.quantity}x ${item.name} - ${(item.price * item.quantity).toFixed(2)} €</span>
        <div class="basket-controls">
            <button class="basket-button" onclick="decreaseQuantity(${i})">-</button>
            <button class="basket-button" onclick="increaseQuantity(${i})">+</button>
            <button class="basket-button" onclick="removeFromBasket(${i})">🗑️</button>
        </div>
    </div>
    `;
}