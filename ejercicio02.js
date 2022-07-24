const userNumA = parseInt(prompt("Escribe un número."));
let userNumB = parseInt(prompt("Escribe otro número."));
userSameNumbers = (userNumA == userNumB);
if (userSameNumbers) {
    do {
        userNumB = parseInt(prompt(`Ya has introducido el ${userNumA}. Escribe otro número diferente.`));
    } while (userSameNumbers = (userNumA == userNumB));
}

console.log("Ambos números introducidos son diferentes... ¡Qué creatividad tienes!")

if (userNumA > userNumB) {
    console.log(`El primer número introducido (${userNumA}) es mayor que el segundo (${userNumB}).`);
}
if (userNumA < userNumB) {
    console.log(`El segundo número introducido (${userNumB}) es mayor que el primero (${userNumA}).`);
}