// dz 1


let age = 1; 
console.log(age);

let name = "Martell";
console.log(name);


let isStudent = true; 
console.log(isStudent);


let myString = "Життя – це те, що з тобою відбувається, поки ти будуєш плани.";
console.log(myString);


let myNumber = 5; 
myNumber += 10;
console.log(myNumber);


let myNull = null;
console.log(myNull);


let userName = prompt("Введіть своє ім'я:");
alert("Привіт, " + userName + "!");


let isConfirmed = confirm("Ви хочете підтвердити дію?");
if (isConfirmed) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}


alert("Увага! Це небезпечна дія.");
let isDangerConfirmed = confirm("Ви впевнені, що хочете продовжити?");
if (isDangerConfirmed) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}



// dz 2


let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit + "°F");


let daysInMonth = 30; 
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth + " годин у місяці");
console.log(minutesInMonth + " хвилин у місяці");


let health = 100;
let energy = 80; 
health -= 20; 
energy -= 30; 
console.log("Здоров'я: " + health);
console.log("Енергія: " + energy);


let totalPurchase = 500;
let discount = 0.1; 
let discountedPrice = totalPurchase * (1 - discount);
console.log("Сума після знижки: " + discountedPrice);


let floatNumber = 5.89;
let roundedNumber = Math.floor(floatNumber);
console.log("Округлене число: " + roundedNumber);


let floatString = "45.67";
let floatResult = parseFloat(floatString);
console.log("Перетворене число: " + floatResult);


let integerString = "123";
let intResult = parseInt(integerString);
console.log("Перетворене ціле число: " + intResult);


let numberForSqrt = 16;
let sqrtResult = Math.sqrt(numberForSqrt);
console.log("Квадратний корінь: " + sqrtResult);


let integerValue = 256;
let stringWithNumber = "345";
let parsedInteger = parseInt(stringWithNumber);
let numberToString = integerValue.toString();
console.log("Рядок перетворений в число: " + parsedInteger);
console.log("Число перетворене в рядок: " + numberToString);



