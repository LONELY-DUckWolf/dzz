const players = [
    { name: 'Mango', colorEye: "white", age: 54, online: false, gender: "man", email: "1@gmail.com"},
    { name: 'Poly', colorEye: "blue", age: 92, online: true, gender: "cat", email: "2@gmail.com" },
    { name: 'Kiwi', colorEye: "yellow", age: 48, online: true, gender: "man", email: "3@gmail.com" },
    { name: 'Ajax', colorEye: "red", age: 71, online: false, gender: "cat", email: "4@gmail.com" },
    { name: 'Chelsy', colorEye: "black", age: 48, online: true, gender: "man", email: "5@gmail.com" },
]
//1
const nameG = players.map((player) => player.name)
console.log(nameG)

//2

const colorEyeG = players.map((player) => ({
    name: player.name,
    colorEye: player.colorEye

})

);

console.log(colorEyeG)

//3

const genderG = players.map((player) => ({
   gender: (`${player.name} - ${player.gender}` )

})

);

//4

console.log(genderG);

//5

const emailG = players.map((player) => (`вот genius имейлы ${player.name} - ${player.email}` ));

console.log(emailG);

//6