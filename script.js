let basket = [];

function renderMenuTemplate() {
    let contentRef = document.getElementById("menu");
    contentRef.innerHTML = "";

    contentRef.innerHTML += getRestaurantHeader();

    for (let i = 0; i < menu.length; i++) {
        let dish = menu[i]
        contentRef.innerHTML += getTemplateMenu(dish, i);
    }
}

function renderBasketTemplate() {
    let contentRef = document.getElementById("basketContentRef");
    contentRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        contentRef.innerHTML += getTemplateBasket(i);

    }
}

function addDishToBasket(i) {
    let dish = menu[i];
    let found = false;

    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name === dish.name) {
            basket[i].quantity++;
            found = true;
            break;
        }
    }

    if (!found) {
        basket.push({
            name: dish.name,
            price: dish.price,
            quantity: 1
        });
    }

    updateBasket();
}

function updateBasket() {
    let contentRef = "";
    let basketTotal = 0;

    for (let i = 0; i < basket.length; i++) {
        contentRef += getTemplateBasket(i);
        basketTotal += basket[i].quantity * basket[i].price;
    }

    document.getElementById("overlayBasketContentRef").innerHTML = contentRef;
    document.getElementById("totalPrice").innerText = `${basketTotal.toFixed(2)} €`;
    document.getElementById("basketContentRef").innerHTML = contentRef;
    document.getElementById("overlayTotalPrice").innerText = `${basketTotal.toFixed(2)} €`;

    localStorage.setItem('basket', JSON.stringify(basket));
}

function increaseQuantity(i) {
    basket[i].quantity++;
    updateBasket();
}

function decreaseQuantity(i) {
    if (basket[i].quantity > 1) {
        basket[i].quantity--;
    } else {
        basket.splice(i, 1);
    }
    updateBasket();
}

function removeFromBasket(i) {
    basket.splice(i, 1);
    updateBasket();
}

function toggleBasketOverlay() {
    const overlay = document.getElementById("basket-overlay");
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
    } else {
        overlay.style.display = "block";
    }
}

function orderComplete() {
    const message = document.getElementById("orderCompleteMessage");
    const messageOverlay = document.getElementById("orderCompleteMessageOverlay");
    const cart = document.getElementById("basketContentRef");
    const overlayCart = document.getElementById("overlayBasketContentRef");
    
    messageOverlay.style.display = "block";
    messageOverlay.innerText = "Vielen Dank für Ihre Bestellung!";

    message.style.display = "block";
    message.innerText = "Vielen Dank für Ihre Bestellung!";

    clearEntireBasket();

    basketContentRef.innerHTML = "";
    overlayBasketContentRef.innerHTML = "";
}


function clearBasket(i) {
    basket.splice(i, 1);
    localStorage.setItem('basket', JSON.stringify(basket));
    updateBasket();
}

function clearEntireBasket() {
    basket = [];
    localStorage.setItem('basket', JSON.stringify(basket));
    updateBasket();
}


function init() {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
        basket = JSON.parse(savedBasket);
    }
    renderMenuTemplate();
    updateBasket();
}

