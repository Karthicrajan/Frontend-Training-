let loginform = document.getElementById('login-form');
loginform.addEventListener('submit', function(e){
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/eCommerce/Home/home.html"
})