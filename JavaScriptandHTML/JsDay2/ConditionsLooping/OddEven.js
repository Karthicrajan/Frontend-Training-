let number = prompt("Enter Value");

number = parseInt(number);
let element = document.querySelector('.res');

if(number % 2 == 0){
    element.innerHTML = `${number} is Even number`;
}else{
    element.innerHTML = `${number} is Odd number`
}