let largest = findLargestWord("Just learning javaScript in training javaScript");
console.log("The largest word is string is --> " + largest);

let replacedName = replacesSameName("John Mary John Alex Mary");
console.log("Replaced String --->   " + replacedName);



var replaceEven = (str) =>{
    let strarr = str.split(/\s+/);

    for(let i = 0; i < strarr.length; i = i + 2){
        strarr[i] = "EVEN";
    }
    return strarr.join(" ");
}

//here i called the function because function expressions and arrow functions can only be called after declaration.
let replacedNameres = replaceEven("I am learning JavaScript every day");
console.log(replacedNameres);

console.log(removeDupli("Hello world"));


function findLargestWord(str){
    let strarr = str.split(/\s+/);
    let res = "";

    for(let i = 0; i < strarr.length;i++){
        if(res.length < strarr[i].length){
            res = strarr[i];
        }
    }
    return res;
}


function replacesSameName(str){
    let readed = "";
    let result = "";
    let strarr = str.split(/\s+/);

    for(let i = 0; i < strarr.length; i++){
        if(readed.includes(strarr[i])){
            result = result + " CHANGED";
        }else{
            result = result + " " + strarr[i];
            readed = readed + strarr[i];
        }
    
    }
    return result;
}

function removeDupli(str){
    let readed = "";
    let result = "";

    for(let i = 0;i<str.length;i++){
        if(str.at(i) == ' '){
            result = result + " ";
        }else if(!readed.includes(str.at(i))){
            readed = readed + str.at(i);
            result = result + str.at(i);
        }
    }
    return result;
}


