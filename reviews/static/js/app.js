const arrows = document.getElementsByClassName("arrow");
const reviews = document.getElementsByClassName("review");
let mode = true;

for (let i = 0; i < arrows.length; i++){
    arrows[i].onclick = function() {

        // yes
        reviews[0].style.display = mode ? "none" : "block";
        reviews[1].style.display = mode ? "none" : "block";
        reviews[2].style.display = mode ? "none" : "block";
        reviews[3].style.display = mode ? "block" : "none";
        reviews[4].style.display = mode ? "block" : "none";
        reviews[5].style.display = mode ? "block" : "none";

        mode = !mode;
    }
}