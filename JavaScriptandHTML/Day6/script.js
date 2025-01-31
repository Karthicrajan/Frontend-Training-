var navbar = document.getElementById("nav-barId");
var navbarLogo = document.getElementById("nav-logo");

window.addEventListener('scroll', () =>{
if(window.scrollY > 100){
    navbar.classList.add('scroll-cmnavbar');
    navbarLogo.classList.add('scroll-logo');
}else{
    navbar.classList.remove('scroll-cmnavbar');
    navbarLogo.classList.remove('scroll-logo');
}
})


var dectab =  document.getElementById("dec-tab");
var revtab =  document.getElementById("rev-tab");

var decContent = document.getElementById("dec-content");
var recContent = document.getElementById("rec-content");
console.log(decContent);

dectab.addEventListener('click',() => {
    dectab.classList.add('tabActive');
    revtab.classList.remove('tabActive');

    
    recContent.classList.add('hide');
    decContent.classList.remove('hide');
})

revtab.addEventListener('click',() => {
    dectab.classList.remove('tabActive');
    revtab.classList.add('tabActive');

    
    decContent.classList.add('hide');
    recContent.classList.remove('hide');
    
})

