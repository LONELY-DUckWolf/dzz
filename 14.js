const players = [
    { name: 'Mango', colorEye: "white", age: 54, online: false, gender: "man", email: "mem@gmail.com"},
    { name: 'Poly', colorEye: "blue", age: 92, online: true, gender: "cat", email: "mem@gmail.com" },
    { name: 'Kiwi', colorEye: "yellow", age: 48, online: true, gender: "man", email: "mem@gmail.com" },
    { name: 'Ajax', colorEye: "red", age: 71, online: false, gender: "cat", email: "mem@gmail.com" },
    { name: 'Chelsy', colorEye: "black", age: 48, online: true, gender: "man", email: "mem@gmail.com" },
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
    const playersAge = (players, min, max) =>
    players.filter((player) => player.age >= min && player.age <= max);
    
    const min = 48;
    const max = 92;
    
    console.log(playersAge(players, min, max));