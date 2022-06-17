let SalObj={
    SlideDown : ["h1",".block-header",".Subs-header"],
    SlideUp : [".Services-items",".Video-BG-text",".Team-members",".WSU-CallAction",
    ".Subs-email",".Forma textarea",".Forma button",".Footer",".Footer-cont",
    ".Pricing-cont .Pack"],
    ZoomOut : [".Video-BG-icon",".Portfolio-items .item",".Team-items .item",
    ".Stats-items .item",".WSU-features .item",],
    SlideRight : [".item__one",".WeWork-text-left",".Testimonials-foto",
    ".cont-left",".input-left"],
    SlideLeft : [".item__two",".WeWork-text-right",".Testimonials-cont-text",
    ".cont-right",".input-right"],
};
let SalObjSett={
    SlideDown : {
        attrib : "data-sal",
        value : "slide-down"
    },
    SlideUp : {
        attrib : "data-sal",
        value : "slide-up"
    },
    ZoomOut : {
        attrib : "data-sal",
        value : "zoom-out"
    },
    SlideRight : {
        attrib : "data-sal",
        value : "slide-right"
    },
    SlideLeft : {
        attrib : "data-sal",
        value : "slide-left"
    },
};
let SalObjQueue={
    queue1 : document.querySelectorAll(".Team-items .item"),
    queue2 : document.querySelectorAll(".Stats-items .item"),
    queue3 : document.querySelectorAll(".WSU-features .item"),
};
for (var key in SalObjQueue) {

    SalObjQueue[key].forEach((el, index) => {

        el.setAttribute("data-sal-delay",150*index); 

    });
}

let SalFunc = function() {
    let sett =SalObjSett;
 
    for (var key in SalObj) {

        for (let i = 0; i < SalObj[key].length; i++) {
            
            let Blocks=document.querySelectorAll(SalObj[key][i]);
            
            Blocks.forEach((el, index) => {
                
                el.setAttribute(sett[key].attrib,sett[key].value);
                el.setAttribute("data-sal-duration","800");     

                if (el==document.querySelector(".Footer-cont")) {
                    el.setAttribute("data-sal-delay","300");     
                }   
                if (el==document.querySelector(".WSU-CallAction")) {
                    el.setAttribute("data-sal-delay","800");     
                }     
            });
        }
    }
}

document.addEventListener('DOMContentLoaded',SalFunc());

sal({
    threshold: 0.55,
    once : false,
});

let TeamItems = document.querySelectorAll(".Team__item");
let triangle = document.querySelector(".Team__triangle");
let trianglePos = ["80px","368px","656px","940px"];
let TeamContMidName = document.querySelector(".Team__members__conts .left__cont .Name");
let TeamContMidArr = ["About Bennet","About Michael","About Alex","About Bill"];

TeamItems.forEach((element,index )=> {
    element.addEventListener('click',function() {
        element.classList.toggle('active');
        // console.log(triangle);
        triangle.style.left =trianglePos[index];
        TeamContMidName.innerHTML = TeamContMidArr[index];
    })
});
let menuBurgerButton = document.querySelector(".list-items ul li:last-child i");
let menuBurger = document.querySelector(".menu__burger");
let menuBurgerList = document.querySelector(".menu__burger ul");
menuBurgerButton.addEventListener('click',function name(params) {
    menuBurger.classList.toggle('active');
    setTimeout(" menuBurger.classList.toggle('anim_on')",50);
    setTimeout(" menuBurgerList.classList.toggle('anim_on')",150);
    // menuBurger.style.opacity="1";
    document.body.classList.toggle('stop-scrolling');
});

