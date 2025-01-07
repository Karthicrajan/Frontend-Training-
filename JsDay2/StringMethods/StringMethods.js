reverseStr("Karthicrajan");

countFrequency("hello",'l');

replaceStr("I love programming","programming","JavaScript");
splitIntoWord("Hello world");

removeSpaces("I love JavaScript");

vowelCount("javascript");

checkPalindrome("madam");

extractInitials("karthicrajan n");





function reverseStr(str){
    let res = str.split("").reverse().join('');
    console.log(res);
}

function replaceStr(Sentence,targetStr,changeStr){
    
    let res = Sentence.replace(targetStr,changeStr);
    console.log(Sentence + " ----> " + res);
}


function checkPalindrome(str){
    let start = 0;
    let end = str.length - 1;
    
    while(start <= end){
        
        if(str.charAt(start) != str.charAt(end)){
            console.log(str + " is not a Palindrome");
            return;
        }
        start++;
        end--;
    }

    console.log(str + " is Palindrome");

}

function extractInitials(fullname){
    let name = fullname.split(" ");
    let initials = [];

    for(let i = 0; i < name.length;i++){
        initials.push(name[i][0].toUpperCase());
    }
    let res = initials.join('.');
    console.log("FullName " + fullname + " ----> " + res);
}

function splitIntoWord(Sentence){
    let words = Sentence.split(" ");
    console.log(words);
}

function removeSpaces(Sentence){
    let res = Sentence.split(/\s+/).join("");
    console.log(Sentence + " -----> " + res);
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

function countFrequency(str,toFind){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == toFind){
            count++;
        }
    }
    console.log(count);
}