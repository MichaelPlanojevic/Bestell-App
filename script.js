let basket = [];

function renderMenuTemplate(){
    let contentRef = document.getElementById("menu");
    contentRef.innerHTML = "";

    for (let i = 0; i < menu.length; i++) {
        let dish = menu[i]
        contentRef.innerHTML += getTemplateMenu(dish,i);
    }
}

function renderBasketTemplate(){
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

    updateCart();
}

function updateCart() {
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
}

function increaseQuantity(i) {
    basket[i].quantity++;
    updateCart();
}

function decreaseQuantity(i) {
    if (basket[i].quantity > 1) {
        basket[i].quantity--;
    } else {
        basket.splice(i, 1);
    }
    updateCart();
}

function removeFromBasket(i) {
    basket.splice(i, 1);
    updateCart();
}

function toggleCartOverlay() {
    const overlay = document.getElementById("cart-overlay");
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
    } else {
        overlay.style.display = "block";
    }
}


function init() {
  renderMenuTemplate();
  updateCart();
}

