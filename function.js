function mediaArray(array) {
    let suma = array[0];
    for (let i = 0; i <= array.length - 1; i++) {
        suma += array[i];
    }
    let media = 0;
    media = (suma / array.length).toFixed(2);
    return media;
}

export {mediaArray};
