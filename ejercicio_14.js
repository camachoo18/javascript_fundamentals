function encontrarMax(array) {
    return Math.max(...array);
}

function encontrarMin(array) {
    return Math.min(...array);
}


function calcularMedia(array) {
    let sum = array.reduce((acumulador, val) => acumulador + val, 0);
    return sum / array.length;
}

function obtenerEstadisticas(array) {
    let min = encontrarMin(array);
    let max = encontrarMax(array);
    let media = calcularMedia(array);
    return {
        min: min,
        max: max,
        media: media
    };
}

let numeros = [91, 22, 33, 4, 56];
let estadisticas = obtenerEstadisticas(numeros);

 console.log(estadisticas);
