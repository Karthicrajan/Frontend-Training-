let age = parseInt(prompt("Enter your age"));

let res = document.querySelector(".res");

if(age >= 18){
    res.innerHTML = "You are eligible!";
}else{
    res.innerHTML = "You are not eligible!"
}