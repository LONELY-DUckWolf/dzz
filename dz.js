// // dz 1


// let age = 1; 
// console.log(age);

// let name = "Martell";
// console.log(name);


// let isStudent = true; 
// console.log(isStudent);


// let myString = "Життя – це те, що з тобою відбувається, поки ти будуєш плани.";
// console.log(myString);


// let myNumber = 5; 
// myNumber += 10;
// console.log(myNumber);


// let myNull = null;
// console.log(myNull);


// let userName = prompt("Введіть своє ім'я:");
// alert("Привіт, " + userName + "!");


// let isConfirmed = confirm("Ви хочете підтвердити дію?");
// if (isConfirmed) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }


// alert("Увага! Це небезпечна дія.");
// let isDangerConfirmed = confirm("Ви впевнені, що хочете продовжити?");
// if (isDangerConfirmed) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }



// // dz 2


// let celsius = 25;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log(fahrenheit + "°F");


// let daysInMonth = 30; 
// let hoursInMonth = daysInMonth * 24;
// let minutesInMonth = hoursInMonth * 60;
// console.log(hoursInMonth + " годин у місяці");
// console.log(minutesInMonth + " хвилин у місяці");


// let health = 100;
// let energy = 80; 
// health -= 20; 
// energy -= 30; 
// console.log("Здоров'я: " + health);
// console.log("Енергія: " + energy);


// let totalPurchase = 500;
// let discount = 0.1; 
// let discountedPrice = totalPurchase * (1 - discount);
// console.log("Сума після знижки: " + discountedPrice);


// let floatNumber = 5.89;
// let roundedNumber = Math.floor(floatNumber);
// console.log("Округлене число: " + roundedNumber);


// let floatString = "45.67";
// let floatResult = parseFloat(floatString);
// console.log("Перетворене число: " + floatResult);


// let integerString = "123";
// let intResult = parseInt(integerString);
// console.log("Перетворене ціле число: " + intResult);




// // заметочки подьехали ту тутут тутутутутутутту

// // // оператор остачі ділення %
// // const isEvenNumber = 10 % 4
// // 10 поділити на 4 = неціле число
// // 9 поділити на 4 = неціле число
// // 8 поділити на 4 = ціле число
// // ми знайшли число яке ділиться на 4 без остачі,
// // тому можем знайти остачу від ділення
// // 10 - 8 = 2 тобто різниця між числами які ми ділили на 4,
// // 2 це остача від ділен


const result = 5 + 5 + '5';
console.log(result);

const email = 'cs.shad3096@gmail.com';
console.log(email)
console.log(email.length);
const checkEmail = email.includes('@');
console.log(checkEmail);

const pidmet = 'I'
const glogol = 'am'
const name = 'Grut'
const fullName = `${pidmet} ${glogol} ${name}`
console.log(fullName);

let userName = prompt("Введіть своє ім'я: ");
alert("Дякуємо, " + userName + "!. До сплати 1499 гривень! Ось моя карта (441 114 3317 5179)!");