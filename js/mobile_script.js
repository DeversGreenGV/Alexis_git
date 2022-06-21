const Team__item = document.querySelectorAll(".Team__item");
const Team_members_cont = document.querySelector(".Team__members__conts .left__cont");
const Team_members_content = Team_members_cont.innerHTML;
console.log(Team_members_content);

window.addEventListener("loadeddata",ChangeLayout);
function ChangeLayout(){
    if (window.innerWidth<= 991.98) {
        Team__item.forEach((el, index) => {
            let Item__members = el.querySelector('.item__members');
            el.classList.add('item__border_color'+(index+1));
            Item__members.insertAdjacentHTML("afterbegin",Team_members_content);
            let Item__text= Item__members.querySelector('.Text');
            Item__text.textContent = Item__text.textContent.slice(0,380)+'...';
            // Item__text.
            // console.log(Item__members.querySelector('.Text').textContent.length);
            // Item__members.querySelector('.Text').textContent
        });
    }
    
}
ChangeLayout();