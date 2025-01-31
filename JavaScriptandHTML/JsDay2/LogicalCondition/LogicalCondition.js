let number = prompt("Enter a number");

number = parseInt(number);

if(number > 10 && number % 2 == 0){
    console.log(`The number ${number} is greater than 10 and divisible by 2`);
}else{
    console.log(`The number ${number} is not met the conditions`);
}