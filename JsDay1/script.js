checkEvenOdd(4);

printnumbers(10);

printMultiples(3);

let result = NumberSum(1);
console.log(result);

findMaxinArray([1,2,3,10,5,6]);

vowelCount("KARTHICrajan");

printStart(5);

fizzBuzz(50);

revString("karthicrajan");

checkPrime(12);






function checkEvenOdd(num){
    let val = parseInt(num);
    if(val % 2 == 0){
        console.log(val + " is Even");
    }else{
        console.log(val + " is Odd");
    }
}

function printnumbers(num){
    const res = [];
    for(let i = 0; i <= num; i++){
        res.push(i);
    }
    console.log(res);
}

function printMultiples(num){
    const result = [];
    for(let i = 1; i < 30; i++){
        let res = num * i;
        result.push(res);
    }
    console.log(result);
}

function NumberSum(num){
    if(num >= 10){
        return num;
    }
    return NumberSum(num + 1) + num;
}

function checkPrime(num){
    if (num <= 1) {
        console.log("Not Prime");
        return;
    }
    let count = 0;
    for(let i = 1;i<=num;i++){
        if(num % i == 0){
            count++;
        }
    }
    if(count > 2){
        console.log("Not Prime");
    }else{
        console.log("Prime");
    }
}



function findMaxinArray(numArray){

    let maxVal = Math.max(...numArray);


    console.log(maxVal);
}


function vowelCount(str){
    let count = 0;
    str = str.toLowerCase();

    for(let i = 0;i<str.length;i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count = count + 1;
        }
    }

    console.log(count);
}

function printStart(num){
    for(let i = 1;i<=num;i++){
        let output = "";
        for(let j = 1;j<=i;j++){
            output = output + "*" + " "; 
        }
        console.log(output);
    }
}

function fizzBuzz(num){
    let fizResult = "";
    for(let i = 1;i<=num;i++){
        if(i % 3 == 0 && i % 5 == 0){
            fizResult = fizResult + "FizzBuzz ";
        }else if(i % 3 == 0){
            fizResult = fizResult + "Fizz ";
        }else if(i % 5 == 0){
            fizResult = fizResult + "Buzz ";
        }else{
            fizResult = fizResult + i + " ";
        }
    }
    console.log(fizResult);
}

function revString(str){
    let result = "";
    for(let i = str.length - 1;i>=0;i--){
        result = result + str.charAt(i);
    }
    console.log(result);
}
