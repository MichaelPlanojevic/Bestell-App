function getTemplateMenu(dish, i) {
    return `
    <div class="menu-item">
        <div class="item-header">
            <div class="item-details">
                <h2>${dish.name}</h2>
                <p>${dish.price.toFixed(2)} €</p>
                <p>${dish.zutaten}</p>
            </div>
            <button class="add-to-basket-btn" onclick="addDishToBasket(${i})">+</button>
        </div>
    </div>
    `;
}

function getRestaurantHeader() {
    return `
    <div class="restaurant-header">
    <div class="photo-wrapper">
    <img src="./Material/Logo/Main-Logo.png" alt="logo" class="main-logo">
</div>
      <img src="./Material/Imgs/chicken-6465555_1280.jpg" alt="Icon" class="header-img">
      <h2 class="name-headline">Orientalis</h2>
      <div class="recomms">
        <h4 class="recomms-headline">Bewertung</h4> ★★★★☆ 
        <span class="review-number">(4.3 / 5)</span>
      </div>
    </div>
    `;
}

function getTemplateBasket(i) {
    let item = basket[i];
    return `
    <div class="basket-item-details">
        <div class="basket-name">${item.name}</div>
    <div class="basket-controls">
        <button class="basket-button" onclick="decreaseQuantity(${i})">-</button>
        <span class="basket-quantity">${item.quantity}</span>
        <button class="basket-button" onclick="increaseQuantity(${i})">+</button>
        <button class="basket-button" onclick="clearBasket(${i})">🗑️</button>
    </div>
         <div class="basket-price">${(item.price * item.quantity).toFixed(2)} €</div>
    </div>
    `;
}