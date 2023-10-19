function celsiusToFahrenheit(c){
    let resultado = (c*1.8) + 32
    return "La conversion de Celsius a Fahrenheit es: " + resultado
}

var operacion = celsiusToFahrenheit(3)
console.log(operacion)