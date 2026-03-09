// navbar
function scrollMenu(value){
document.getElementById("menuScroll").scrollBy({
left:value,
behavior:"smooth"
});
}

const menuSection = document.getElementById("menuNavSection");
const stickyOffset = menuSection.offsetTop;

window.addEventListener("scroll", function(){

if(window.pageYOffset >= stickyOffset){
menuSection.classList.add("sticky-menu");
}
else{
menuSection.classList.remove("sticky-menu");
}

});




// nav2


// main
const dishes = [
"Appetizer ...",
"Salad Bar ...",
"Traditional Food ...",
"Karahi ...",
"Chinese ...",
"Our Specialities ...",
"BBQ ...",
"Pasta ...",
"Burger ...",
"Sandwich ...",
"Stsck ...",
"Naan ...",
"Beverages ...",
"Tea Time Delights ...",
"Desert ...",
"Salad Bar ..."

];

let dishIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    let currentDish = dishes[dishIndex];

    if(deleting){
        charIndex--;
    }else{
        charIndex++;
    }

    let text = currentDish.substring(0, charIndex);

    document.getElementById("searchInput").placeholder =
        "Search for " + text;

    let speed = 120;

    if(!deleting && charIndex === currentDish.length){
        deleting = true;
        speed = 1200;
    }
    else if(deleting && charIndex === 0){
        deleting = false;
        dishIndex++;

        if(dishIndex === dishes.length){
            dishIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();