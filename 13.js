//1
const user = {
    hobby: 'ff',
    premium: true
};

user.mood = 'sad';
user.hobby = 'ff';
user.premium = false;

const { hobby, premium, mood } = user;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

//2

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const [employee, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = employee;
        }
    }

    return  bestEmployee
}

const employees = {
    biba: 854,
    boba: 36436,
    jojo: 7356976969,
    dio: 344868976
};

console.log(findBestEmployee(employees));

//3

function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const obj of arr) {
        if (prop in obj) {
            propValues.push(obj[prop]);
        }
    }

    return propValues;
}

const products = [
    { name: 'gg', price: 2535, quantity: 9 },
    { name: 'rr', price: 235, quantity: 2 },
    { name: 'tt', price: 25352, quantity: 1 },
    { name: 'aa', price: 2435, quantity: 8 },
];
    
  const [product1, product2, product3, product4] = products
  for (const { name, price, quantity } of products) {
    console.log(`1: ${name}, 2: ${price}, 3: ${quantity}`);
  }

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'price'));
console.log(getAllPropValues(products, 'quantity'));

