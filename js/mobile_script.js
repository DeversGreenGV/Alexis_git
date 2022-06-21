const Team__item = document.querySelectorAll(".Team__item");

window.addEventListener("resize",ChangeLayout);
function ChangeLayout(){
    if (window.innerWidth<= 991.98) {
        console.log(window.innerWidth+" "+window.innerHeight);
        Team__item.forEach((el, index) => {
            // console.log(element);
            el.classList.add('item__border_color'+(index+1));
        });
    }
    
}
ChangeLayout();