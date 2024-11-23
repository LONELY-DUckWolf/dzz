const gemuse = ['kartofel', 'pommes friettes', 'cherry'];
const obst = gemuse.join(", ");
console.log(obst)


const kakarta = ['Карточка1', 'Карточка2', 'Карточка3', 'Карточка4', 'Карточка5'];
const deleteCard3 = kakarta.splice(2, 1);
console.log(kakarta);


const addkakarta6 = kakarta.push('Карточка6');
console.log(kakarta);


const updatekakarata4 = kakarta.splice(3, 1, 'AUGH4');
console.log(kakarta);