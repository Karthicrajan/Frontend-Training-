let isAccept = confirm("Do you continue this site");

let res = document.querySelector('.res');

if(isAccept){
    res.innerHTML = "You chose to continue!";
}else{
    res.innerHTML = "You canceled!";
}