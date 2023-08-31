//Задание 1

// var number = prompt ("Введите число!");

// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//   console.log("Fizz");
// } else if (number % 5 === 0) {
//   console.log("Buzz");
// }

// Задание 2

// let inputYear = parseInt(prompt("Введите год:"));

// if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
//     console.log(inputYear + " есть высокосным годом.");
// } else {
//     console.log(inputYear + " не есь высокосным годом.");
// }

//Задание 3

let age = prompt ("Введіть свій вік");  

let yearWord;

if (age === 1) {
  yearWord = "рік";
} else if (age >= 2 && age <= 4) {
  yearWord = "роки";
} else {
  yearWord = "років";
}

console.log(`Вам ${age} ${yearWord}`);