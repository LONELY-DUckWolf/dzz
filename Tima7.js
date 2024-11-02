// Tima1
const massive = [5, 1, 7]
massive[1] = 10 
console.log(massive)

//Tima2

const strings = ["Tima", "Olya", "Bokikvak"]
strings[3] = "Max"
console.log(strings)
//tima3

const uber = [122, 0, 9] 
const koka = uber[0] + uber[1] + uber[2] + uber[3]
console.log(koka)
// Task 4
const klava = [4, 2, 5, 6, 8]
let noga = 0;
for (let i = 0; i < klava.length; i++) {
noga += klava[i];
console.log(klava[i]);
}
// Task 5
const Tima = ["amiT", "мёртвыйбасеин", "Kaktus", "Andre", "Deadpool"];
for (let i = 0; i < Tima.length; i++) {
    if (Tima[i].length > 5) {
     console.log(Tima[i]);
 }
}
// Task 6
let srebmun = [5, 12, 8, 21, 3, 17, 9, 44, 6, 13];
let max = srebmun[0]; 
for (let i = 1; i < srebmun.length; i++) {
  if (srebmun[i] > max) {
    max = srebmun[i];
  }
}
console.log(max);
// Task 7
let нo = [5, 12, 8, 21, 3, 17, 9, 44, 6, 13];
for (let i = 0; i < нo.length; i++) {
  if (нo[i] % 2 === 0) {
    console.log(нo[i]);
  }
}
