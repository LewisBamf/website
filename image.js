var container = document.getElementById("imageid")

container.addEventListener("scroll", function(){

    document.querySelectorAll(".images img").forEach(img => {
        const rect = img.getBoundingClientRect();
        const width = img.naturalWidth;
        const moveR = window.innerWidth + width
        console.log (width)
    
        if(rect.left < 0){
            image.style.transform = "translate(" + moveR + "px, 0px)"
        }
    })

});