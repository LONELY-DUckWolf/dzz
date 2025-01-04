// Task 1
const user = {
    name: 'boba',
    age: 156,
    hobby: 'ski',
    premium: true
};

user.mood = 'sad';
user.hobby = 'music';

user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}
// Task 2
function countProps(obj) {
    return Object.keys(obj).length;
}

const userPropsCount = countProps(user);
console.log(`vlast: ${userPropsCount}`);
// Task 3
function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const [employee, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = employee;
        }
    }

    return `Наluche vsex ${bestEmployee}, з ${maxTasks} `;
}

const employees = {
    biba: 854,
    boba: 36436,
    jojo: 7356976969,
    dio: 344868976
};

console.log(findBestEmployee(employees));
// Task 4
function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
}

const salaries = {
    tima: 36463,
    Tima: 346346,
    TIma: 34643634,
    tIma: 36436654
};

console.log(`zp: ${countTotalSalary(salaries)}`);
// Task 5
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

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'price'));
console.log(getAllPropValues(products, 'quantity'));
// Task 6
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

console.log(calculateTotalPrice(products, 'gg'));
console.log(calculateTotalPrice(products, 'rr'));
console.log(calculateTotalPrice(products, 'tt')); 
console.log(calculateTotalPrice(products, 'aa')); 