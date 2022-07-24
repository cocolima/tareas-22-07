const userNumA = parseInt(prompt("Escribe un número, puede ser cualquiera."));
const userNumB = parseInt(prompt("Escribe otro número, puede ser cualquiera."));

if (userNumA>userNumB) {
    console.log(`El primer número introducido ${userNumA} es mayor que el segundo (el 2º era ${userNumB})`);
}
if (userNumA<userNumB) {
    console.log(`El segundo número introducido ${userNumB} es mayor que el primero (el 1º era ${userNumA})`);
}
if (userNumA==userNumB) {
    console.log(`¡Qué casualidad! ¿O tal vez fue pereza? El segundo número introducido (${userNumB}) es IGUAL que el primero (el 1º era también ${userNumA})`);
}