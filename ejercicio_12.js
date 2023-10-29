function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let resultado_de_imc = {
      altura: altura,
      peso: peso,
      IMC: imc
    };
    return resultado_de_imc;
  }
  
  const resultado = calcularIMC(65, 1.8);
  
  console.table([resultado]); //Se pone entre parentesis y corchetes el array que hemos definido anteriormente
  



