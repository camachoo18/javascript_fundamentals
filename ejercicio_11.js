let lista = [1, 0.5, "olee", true] //imperativa
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i], typeof lista[i])
 
}

function iteraArray(arr) { //funcional
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], typeof arr[i])
  }
}
