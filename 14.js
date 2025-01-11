const players = [
    { name: 'Mango', colorEye: "white", age: 1, online: false, gender: "man", email: "mem@gmail.com"},
    { name: 'Poly', colorEye: "blue", age: 9, online: true, gender: "cat", email: "mem@gmail.com" },
    { name: 'Kiwi', colorEye: "yellow", age: 2, online: true, gender: "man", email: "mem@gmail.com" },
    { name: 'Ajax', colorEye: "red", age: 3, online: false, gender: "cat", email: "mem@gmail.com" },
    { name: 'Chelsy', colorEye: "black", age: 4, online: true, gender: "man", email: "mem@gmail.com" },
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

const playerSex = players.map((player) => {
    return player.name + " " + player.gender
    })
    console.log(playerSex);


    
// task 4
    const onlinePlayers = players.filter(player => !player.online)  
    console.log(onlinePlayers)

//5
    const findEmail = players.find((player) => player.email === "mem@gmail.com")

    console.log(findEmail)

//6
const filterAge = (players, min, max) =>
players.filter((player) => player.age >= min && player.age <= max);

const minw = 1;
const maxw = 5;

console.log(filterAge(players, minw, maxw));