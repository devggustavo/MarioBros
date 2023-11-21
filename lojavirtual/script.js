let searchMenu = document.getElementById("searchMenu");
let cartMenu = document.getElementById("cartMenu");
let profileMenu = document.getElementById("subMenu");

function toggleSearch(){
    searchMenu.classList.toggle("active");
    cartMenu.classList.remove("active");
}
function toggleCart(){
    cartMenu.classList.toggle("active");
    searchMenu.classList.remove("active");
}
function closeBtn(){
    cartMenu.classList.remove("active");
}
function toggleMenu(){
    profileMenu.classList.toggle("active");
}