// const array = ["m", "t", "o", "b"]
// let label = ""
// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         label += `${i} - ${array [i]}`
        

//     }

//     return label
// }
// console.log(logItems(array));




// // timabelinegr 2

// const slova = "lol1 lol2 lol3"
// function calculateEngravingPrice(message, pricePerWord) {
//     const makeMassive = message.split(" ")
//     const index = makeMassive.length

//     return index * pricePerWord
// }
    
// console.log(calculateEngravingPrice(slova, 2));




// const slova2 = "lol1 lol20 lol300" 

// const makeMasive2 = slova2.split(" ")
// let longestWord = ""
// function findLongestWord(string) {
//     for (let c = 0; c < makeMasive2.length; c++){
//         if (makeMasive2[c].length > longestWord.length) {
//             longestWord = makeMasive2[c]
//         }
//     }

//     return longestWord
// }
// console.log(findLongestWord(makeMasive2));



// const slova3 = "luboi ryadok tima haroshi drug poetomu on mne pomogati s etim"
// function formatString(string) {
//     if (string.length <= 40){

//         return string

    
//     } else {
//         return string.slice(0, 40) + "..."

        

//     }
    
    

// }
// console.log(formatString(slova3));




// function checkForSpam(message) {
//     let telephone = message.toLocaleLowerCase()
//     if (telephone.includes("spam", "sale")) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkForSpam("tIma haroshi taboo poetomu On mne pomOgati SPAM Etim"))
// console.log(checkForSpam("tIma haroshi taboo poetomu On mne pomOgati s Etim"))


// let numbers = [];
// while (true) {
//     let input = prompt("Введіть число:");
//     if (input === null) {
//       break;
//     }
//     if (isNaN(input) || input === "") {
//       alert("Було введено не число, попробуйте ще раз");
//     } else {
//       numbers.push(Number(input));
//     }
//   }
//   if (numbers.length > 0) {
//     let total = 0;
//     for (const number of numbers) {
//       total += number;
//     }
//     console.log(Загальна сума чисел дорівнює ${total});
//   } else {
//     console.log("Не було введено жодного числа.");
//   }