let loginform = document.getElementById('login-form');
loginform.addEventListener('submit', function(e){
    e.preventDefault();
    let emailfield = document.getElementById("email");
    let pass = document.getElementById("password");
    let pattern =  /^[a-z0-9]+@[a-zA-Z0-9-]+.[a-z]{1,3}$/;

    let res = pattern.test(emailfield.value);
    if(!res){
        alert("enter Valid Email");
        return;
    }
    window.location.href = "http://127.0.0.1:5500/eCommerce/Home/home.html"
})