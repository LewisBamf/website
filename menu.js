document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector(".menu-icon");
    var dot = document.getElementsByClassName("dot");
    var isWide = false;
    var menuP = document.querySelector(".menu-page");

    menu.addEventListener("click", function() {
        console.log("clicked");
        if (isWide) {
            for (var i = 0; i < dot.length; i++) {
                dot[i].style.width = "5px";
                dot[i].style.borderRadius = "50%";
                dot[i].classList.remove(`extended`);
            }
            menuP.style.transform = "translate(100vw, 40px)";
            menuP.style.boxShadow = "0px 0px 0px rgba(0,0,0,0)";
        } else {
            for (var i = 0; i < dot.length; i++) {
                dot[i].style.width = "30px"; 
                dot[i].style.borderRadius = "5px";
                dot[i].classList.add(`extended`);
            }
            menuP.style.transform = "translate(calc(100vw - 200px), 40px)";
            menuP.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.7)";
        }
        isWide = !isWide; 
        console.log(isWide);
    });
});
