let header = document.querySelector("header");
let navbar_btn = document.querySelector(".btn");
let navbar_menu = document.querySelector(".nav-bar");
let circle_controle = document.querySelectorAll(".controle li");
let btn_right = document.querySelector(".right")
let btn_left = document.querySelector(".left")
let landing = document.querySelector(".landing")


let images = ['file/img/landing.jpg' , 'file/img/6.jpg' , 'file/img/landing_2.jpg'];
let index = 0;
btn_right.onclick = function(){
    index++;
    if(index > 2){
        index = 0;
        change_image(index);
        change_color_circle(index)
    }
    else{
        change_image(index)
        change_color_circle(index)
    }
}  
btn_left.onclick = function(){
    index--;
    if(index < 0){
        index = 2;
        change_image(index)
        change_color_circle(index)
    }
    else{
        change_image(index)
        change_color_circle(index)
    }
}  

function change_image(index){
    landing.style.cssText = `background-image:url(${images[index]})`
}

function change_color_circle(index){
    circle_controle.forEach(function(ele , i , arr){
        if(ele.getAttribute("data-target") == index){
            ele.classList.add("active")
        }
        else{
            ele.classList.remove("active")
        }
    })
}
/* ================== Start Strolling ======================== */
window.onscroll = function () {
    if(window.scrollY >= 600){
        header.style.cssText = "background-color: #000;"
    }
    else{
        header.style.cssText = "background-color: #00000000;"
    }
}
/* ================== Endin Strolling ======================== */

/* ================== Start btn-menu ========================= */
document.addEventListener('click' , function(e){
    if(e.target.getAttribute("class") === "fa-solid fa-bars btn"){
        navbar_menu.classList.toggle("open")
        
        if(navbar_menu.getAttribute("class") === "nav-bar open"){
            navbar_menu.style.cssText = "transform: scale(1,1);"
        }
        else{
            navbar_menu.style.cssText = "transform: scale(1,0);"
        }
    }
    else{
        navbar_menu.style.cssText = "transform: scale(1,0);"
    }
})
/* ================== Ending btn-menu ========================= */
