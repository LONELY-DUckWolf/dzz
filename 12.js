
const user = {
    hobby: "ff",
    premium: true
}
user.hobby = "ff";
user.premium = false
user.mood = "sad"
console.log(user);

const remakeKeys = Object.keys(user)
for (let keys of remakeKeys) {
    console.log(`${keys}:${user[keys]}`)
}

function countProps(object) {
    return Object.keys(user).length
}
console.log(countProps(user))

function findBestEmployee(employees) {
    let bestEmployee = null;
    let maxTasks = 0;
    for (let [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            bestEmployee = name
            maxTasks = tasks
        }
        return bestEmployee
    }
}

const employees = {
    rdd: 1111,
    rfff: 2222,
    wwwwww: 344
}

console.log(findBestEmployee(employees))

const salary = {
    iiei: 1000,
    kfkff: 2000,
    fff:3000
}
function countTotalSalary(employees) {
let totalSalary = 0;

for (const salary of Object.values(employees)) {
  totalSalary += salary;
}

return totalSalary;
}

console.log(countTotalSalary(salary))

const products = [
  { name: "gg", price: 1500, quantity: 4 },
  { name: "cs", price: 800, quantity: 10 },
  { name: "opa", price: 1200, quantity: 5 },
];
function getAllPropValues(arr, nameValue) {
     const values = [];

     for (const object of arr) {
       if (object.hasOwnProperty(nameValue)) {
         values.push(object[nameValue]);
       }
     }

     return values;
}
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break;
        }
    }

    return totalPrice;
}

console.log(calculateTotalPrice(products, "gg"));
console.log(calculateTotalPrice(products, "cs"));
console.log(calculateTotalPrice(products, "opa"));