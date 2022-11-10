console.log("hello world");
let list = document.querySelectorAll("ul li");
// console.log(list);
function activeLink( ) {
    list.forEach((item)=>
item.classList.remove("active"));
this.classList.add("active");
};
list.forEach((item)=>
item.addEventListener("click", activeLink));

let Slidelist = document.querySelectorAll(".menu ul li");
// console.log(Slidelist);
function activeLink( ) {
    list.forEach((item)=>
item.classList.remove("active"));
this.classList.add("active");
};
Slidelist.forEach((item)=>
item.addEventListener("click", activeLink));

let slideMenufun = ( right )=>{
    let slideMenu = document.getElementById ("menuslide");
    slideMenu.style.right = right;
}

// let bodyWidth = document.documentElement.clientWidth;
// console.log(bodyWidth)

// let menuFunciton=()=>{
//     if (bodyWidth <1100 ) {
        
//     }
// }



// window.onload = menuFunciton ;
// window.onscroll = menuFunciton ;

let slideBtn = document.getElementById("menuBtn");
slideBtn.addEventListener("click" , e=()=>{
    slideMenufun("0%")
})

let closeslideBtn = document.getElementById("slidecloseBtn");
closeslideBtn.addEventListener("click" , e=()=>{
    slideMenufun("-100%")
})

window.addEventListener("scroll" , e=()=>{
    let navBar = document.getElementById("nav-container");
    navBar.classList.toggle("nav-container-scroll" , window.scrollY > 0)
})

let dropDownService = document.getElementById("service-drop-down");
let dropDownBlog = document .getElementById("blog-drop-down");

// dropDownService.addEventListener("click" , e = ()=>{
//     let serviceBox = document.getElementById("slideServices");
//     serviceBox.style.display = "block";
// })
$(document).ready(e=()=>{
    $("#service-drop-down").click(e=()=>{
        $("#slideServices").animate ({
            height: "toggle"
        })
    })
    $("#blog-drop-down").click (e=()=>{
        $("#slideBlog").animate ({
            height : "toggle"
        })
    })
})