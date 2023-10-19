function calcularPrecioConIva(p){
    let resultado = (p * 1.21)
    return "El valor del precio con iva es: " + resultado
}

var operacion = calcularPrecioConIva (20)
console.log(operacion)