let number = prompt("Enter a number");
number = parseInt(number);

let element = document.querySelector(".res");

number >= 0 ? element.innerHTML = `${number} is Postive Number` : element.innerHTML = `${number} is Postive Number`; 