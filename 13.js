//1

const user = {
    name: 'boba',

    age: 156,

    hobby: 'ski',

    premium: true,



};


const{name, age, hobby, online} = user;

console.log(age, hobby, online)

//2

const ludi = ["Tima", "Olya", "Bokikvak"]


[3] = "max"

console.log(ludi)


//3



const products = [
    { maxim: "elka", price: 44994, quantity: 4 },
  ];


const [product] = products
for (const {price, quantity } of products) {
    console.log(`Price: ${price}, Quantity: ${quantity}`);
  }