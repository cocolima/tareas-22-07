import { mediaArray } from "./function.js";
const MAX_DICE = 6;
const MIN_DICE = 1;
let dicesArray = [];
const REPEAT = 6000;

for (let i = 0; i < REPEAT; i++) {
    let rollDice1 = Math.floor(Math.random() * (MAX_DICE - MIN_DICE + 1) + MIN_DICE);
    let rollDice2 = Math.floor(Math.random() * (MAX_DICE - MIN_DICE + 1) + MIN_DICE);
    let sumTwoDices = rollDice1 + rollDice2;
    dicesArray.push(sumTwoDices);
}

console.log(dicesArray);//resultado de todas las tiradas dobles
console.log(mediaArray(dicesArray));//esta es la media de la suma de todos los dados