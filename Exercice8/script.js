// fonction classique
function add(num1, num2) {
    return Number(num1) + Number(num2);
};
// ou bien fonction flèchée
// const add = (num1, num2) => num1 + num2;

// Déclaration des nombres
let number1 = 5;
let number2 = 3;
//Appel de la fonction
const sum = add(number1, number2);

export default add;
