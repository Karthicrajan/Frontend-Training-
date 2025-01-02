var navbar = document.getElementById("nav-bar");
var navbarLogo = document.getElementById("nav-logo");

window.addEventListener('scroll', () =>{
if(window.scrollY > 100){
    navbar.classList.add('scroll-navbar');
    navbarLogo.classList.add('scroll-logo');
}else{
    navbar.classList.remove('scroll-navbar');
    navbarLogo.classList.remove('scroll-logo');
}
})