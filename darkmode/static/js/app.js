const root = document.querySelector(":root");
const mode = document.getElementById("mode");

/* start with dark mode*/
mode.checked = false;

mode.onchange = function(){

    let bg = "#212730";
    let fc = "#d4d4d4";
    let pbd = "rgba(212, 212, 212, 0.4)";

    console.log(mode.checked);
    if (mode.checked) {
        bg = "white";
        fc = "black";
        pbd = "black";
    }

    root.style.setProperty("--background-color", bg);
    root.style.setProperty("--font-color", fc);
    root.style.setProperty("--products-border-color", pbd);
}