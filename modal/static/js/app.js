const products = document.getElementsByClassName("product");

/* i love javascript so much :D */

const blue = document.getElementById("js--blue");
const red = document.getElementById("js--red");
const white = document.getElementById("js--white");
const black = document.getElementById("js--black");
const closeBlue = document.getElementById("js--close-blue");
const closeRed = document.getElementById("js--close-red");
const closeWhite = document.getElementById("js--close-white");
const closeBlack = document.getElementById("js--close-black");

let toggles = {
    "products": true,

    "blue": {
        "toggle": false,
        "modal": document.getElementById("js--blue-modal")
    },

    "red": {
        "toggle": false,
        "modal": document.getElementById("js--red-modal")
    },

    "white": {
        "toggle": false,
        "modal": document.getElementById("js--white-modal")
    },

    "black": {
        "toggle": false,
        "modal": document.getElementById("js--black-modal")
    }
}

function toggle(item) {
    for(let i = 0; i < products.length; i++){
        products[i].style.display = toggles["products"] ? "none" : "block";
    }

    toggles["products"]= !toggles["products"];

    toggles[item]["toggle"] = !toggles[item]["toggle"]
    toggles[item]["modal"].style.display = toggles[item]["toggle"] ? "grid" : "none";
}

blue.onclick = function(){ toggle("blue") };
red.onclick = function(){ toggle("red") };
white.onclick = function(){ toggle("white") };
black.onclick = function(){ toggle("black") };
closeBlue.onclick = function(){ toggle("blue") }
closeRed.onclick = function(){ toggle("red") };
closeWhite.onclick = function(){ toggle("white") };
closeBlack.onclick = function(){ toggle("black") };