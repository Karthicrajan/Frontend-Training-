let number = parseInt(prompt("Enter the Value"));

let root = document.querySelector('.root');

for(let i = 1; i <= 10; i++){
    
    let newElement = document.createElement('p');

    newElement.innerHTML = `${number} x ${i} = ${number * i}`;
    root.append(newElement);
}