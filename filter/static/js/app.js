const allGames = document.getElementsByClassName("game");
const filters = document.getElementsByClassName("filter");
const COD = document.getElementById("checkbox-COD");
const Fallout = document.getElementById("checkbox-Fallout");
const SaintsRow = document.getElementById("checkbox-SaintsRow");

/* Scroll after 1.5s */
setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

/* Start at the very top */
window.scrollTo(0, 0);

/* Make sure all checkboxes start at True*/
for(let i = 0; i < filters.length; i++) {
    filters[i].checked = true;
}

/* Checkbox handlers */
COD.onchange = function(){

    display = COD.checked ? "block" : "none";
    for(let i = 0; i < allGames.length; i++){
        if(allGames[i].dataset.category === "COD"){    
            allGames[i].style.display = display;
        }
    }
}

Fallout.onchange = function(){

    display = Fallout.checked ? "block" : "none";
    for(let i = 0; i < allGames.length; i++){
        if(allGames[i].dataset.category === "Fallout"){    
            allGames[i].style.display = display;
        }
    }
}

SaintsRow.onchange = function(){

    display = SaintsRow.checked ? "block" : "none";
    for(let i = 0; i < allGames.length; i++){
        if(allGames[i].dataset.category === "SaintsRow"){    
            allGames[i].style.display = display;
        }
    }
}