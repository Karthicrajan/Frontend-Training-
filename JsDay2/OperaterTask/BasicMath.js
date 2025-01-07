let a = prompt("Enter Value for a :");
let b = prompt("Enter Value for b :");

let root = document.querySelector(".root");


Sum(a,b);



function Printer(result,operationName){
    let newElement = document.createElement('p');
    newElement.innerHTML = operationName + ": " + result;
    root.append(newElement);
}

function Sum(num1,num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let res = num1 + num2;
    if(res){
        Printer(res,"Sum");
    }
    Difference(num1,num2);
}

function Difference(num1,num2){
    let res = Math.abs(num1 - num2);
    if(res){
        Printer(res,"Difference");
    }
    Product(num1,num2);
}

function Product(num1,num2){
   
    let res = num1 * num2;
    if(res){
        Printer(res,"Product");
    }
    Quotient(num1,num2);
}

function Quotient(num1,num2){
   
    let res = num1 / num2;
    if(res){
        Printer(res,"Quotient");
    }
   
}
