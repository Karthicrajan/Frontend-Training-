let number = parseInt(prompt("Enter number"));

let count = 0;

while(number > 0){
    
    number = Math.floor(number / 10);
    console.log(number);
    count++;
}

let element = document.querySelector(".res");
element.innerHTML = `${number} = ${count}`;