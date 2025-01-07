let mark = parseInt(prompt("Enter Mark"));
let element  = document.querySelector('.res');

switch (true) {
    case (mark >= 90 && mark <= 100):
        element.innerHTML = mark + " = Grade A"
        break;
    case (mark >= 80 && mark <= 89):
        element.innerHTML = mark + " = Grade B"
        break;
    case (mark >= 70 && mark <= 79):
        element.innerHTML = mark + " = Grade C"
        break;
    default:
        element.innerHTML = mark + " = Grade F"
        break;
}

