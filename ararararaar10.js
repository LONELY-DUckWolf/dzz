// function sayHello() {
//     const saveClick = confirm("a")
//     if (saveClick === true) {
//       alert("hello")
//     } else {
//       alert("plese try again")
//     }
//    }
//   sayHello()
//   // Task 2
//   const rndNum = Math.floor(Math.random() * 100)
//   console.log(rndNum)
//   const my = Number(prompt("guess number from 1 to 100"))
  
//   function checkRightAnswer() {
//       if (my === rndNum) {
//           alert("win")
//       } else {
//           alert("nuhu")
//       }
  
//   }
//   checkRightAnswer()
//   // Task 3
//   let res = 0;
//   function beskonechnost() {
//     while (true) {
//       const plusClick = confirm("Click me");
//       if (plusClick) {
//         res++;
//         console.log(`U clicked ${res}`);
//       } else {
//         console.log("click me again");
//         break;
//       }
//     }
//   }
//   beskonechnost();
//   // Task 4
//   const arr = [2, 3, 4, 5];
//   function applyCallbackToEachElement(arr, callback) {
//     let newArr = [] 
//     for (let i = 0; i < arr.length; i++){
//       newArr.push(callback(arr[i]))
//     }
//     return newArr
//   }
  
//   function squareCallback(arr) {
//     return arr * arr
//   }
  
//   console.log(applyCallbackToEachElement(arr,squareCallback))
  
  
//   // Task 5
  
//   function calculateDiscountedPrice(price, discount, callback) {
//     const calculation = (price / 100 * discount)
//     const calculationSale = price - calculation
//     return callback(calculationSale)
//   }
  
//   function showDiscountedPrice(calculationSale) {
//     let returnMessege = `Ваша дисконтна ціна дорівнює ${calculationSale}`
//     return returnMessege
//   }
  
//   console.log(calculateDiscountedPrice(100,10,showDiscountedPrice))