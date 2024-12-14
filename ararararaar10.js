// prompt(alert("Hello World"))


// function words(callback) {
//     while (true) {
//         callback(alert("Hello World"))
//         break
//     }
// }
// console.log(words(callback()))


const arr = [2, 3, 4, 5];
function apllyCallbackToEachElement(arr,callback) {

let newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
}
return newArr
}   

function squareCallback(arr) {
    
    return arr * arr
}

console.log(apllyCallbackToEachElement(arr,squareCallback))

// 5

function calculatedDiscountedPrice(price, discount, callback) {
    let saveMessage = callback()
    const calculation = (price / 100 * discount)
    const calculationSale = price - calculation
    return callback(calculationSale)
}

function showDiscountedPrice(calculationSale) {
    let returnMessage = `цена ${calculationSale}`
    return returnMessage
}

console.log(calculatedDiscountedPrice(100, 10, showDiscountedPrice))