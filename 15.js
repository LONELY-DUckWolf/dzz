const players = [
    { name: 'Mango', colorEye: "white", friends: 1, online: false, gender: "man", balance: "1"},
    { name: 'Poly', colorEye: "blue", friends: 23, online: true, gender: "cat", balance: "2" },
    { name: 'Kiwi', colorEye: "yellow", friends: 66, online: true, gender: "man", balance: "5" },
    { name: 'Ajax', colorEye: "red", friends: 5, online: false, gender: "cat", balance: "235" },
    { name: 'Chelsy', colorEye: "black", friends: 2, online: true, gender: "man", balance: "5325" },
]

//1

const allDenga = players.reduce((rap, player) => {
    return rap + player.balance;
  }, 0);
  console.log("");
  console.log(allDenga);

//3
const playersFriends = (players, min, max) =>
players.filter((player) => player.friends >= min && player.friends <= max);

const min = 1;
const max = 66;

console.log(playersFriends(players, min, max));