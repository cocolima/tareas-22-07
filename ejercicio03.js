let array = [33, 3, 666, -22, 37, 1985];
let arrayUnevenValues = [];
let arrayGreaterThan100Value = [];
let countUneven = 0;
let countPlusHundred = 0;
for (let i = 0; i < array.length; i++) {
    let greaterThan100Value = array[i] > 100;
    if (array[i] % 2 == true) {
        arrayUnevenValues.push(array[i]);
        countUneven++;
    }

    if (greaterThan100Value == true) {
        arrayGreaterThan100Value.push(array[i]);
        countPlusHundred++;
    }
}

console.log(`El array que he definido es el siguiente:`); console.log(array);
console.log(`Los valores impares del array son: ${arrayUnevenValues}. En total son: ${countUneven}`);
console.log(`Los valores del array que son mayores de 100 son: ${arrayGreaterThan100Value}. En total son: ${countPlusHundred}`);