const cartButtons = document.getElementsByClassName("stickers__button");
const cartCounter = document.getElementById("js--cartCounter");
const cartButton = document.getElementById("js--cartButton");
const modal = document.getElementById("js--shoppingModal");
const checkout = document.getElementById("js--checkout");
const main = document.getElementById("js--main");

let cart = {};
let cartItems = 0;

cartButton.onclick = function() {
    if (checkout.style.display == "none") {

        let products = `<ul class="checkout__list">`;
        
        // edit in all the picked products
        for (let key in cart) {

            product_name = cart[key]["name"];
            product_amount = cart[key]["amount"];
            product_image = cart[key]["img"]

            products += `
<li class="checkout__item">
    <img src="${product_image}" alt="${product_name}" class="checkout__img">
    <p class="checkout__title">${product_name}</p>
    <p class="checkout__amount">${product_amount}x</p>
</li>`;
        }

        products += `</ul>`;

        checkout.innerHTML = products;
        
        // display the checkout view
        checkout.style.display = "block";

        // hide everything else
        modal.style.display = "none";
        main.style.display = "none";

    } else {

        checkout.style.display = "none";
        main.style.display = "flex";
    }
}

for (let i = 0; i < cartButtons.length; i++) {
    let button = cartButtons[i];

    button.onclick = function () {
        cartItems += 1;

        let product_id = button.getAttribute("product-id");
        let product_name = button.getAttribute("product-name");
        let product_image = button.getAttribute("product-img");

        // if it doesn't exist yet, create
        if (cart[product_id] === undefined) {
            cart[product_id] = {
                "name": product_name,
                "img": product_image,
                "amount": 0
            }
        }

        cart[product_id]["amount"] += 1;

        cartCounter.innerText = cartItems.toString();

        // check if modal is already being shown
        if (modal.style.display != "flex") {
            modal.style.display = "flex";

            // hides itself after 2 seconds
            setTimeout(
                function(){ modal.style.display = "none"; }, 
                2000
            );
        }
    }
}
