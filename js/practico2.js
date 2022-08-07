// ejercicio 1
// let edad = prompt("Indique su edad")

// if(edad >= 18){
//     document.write("Puede conducir")
// }else{
//     document.write("No tiene edad para conducir")

// }

// ejercicio 2

// let nota = prompt("Ingrese un numero");

// switch (nota) {
//   case `0`:
//     document.write("Muy insuficiente");
//     break;
//   case `1`:
//     document.write("Muy insuficiente");
//     break;
//   case `2`:
//     document.write("Muy insuficiente");
//     break;
//   case `3`:
//     document.write("Insuficiente");
//     break;
//   case `4`:
//     document.write("Insuficiente");
//     break;
//   case `5`:
//     document.write("Suficiente");
//     break;
//   case `6`:
//     document.write("Suficiente");
//     break;
//   case `7`:
//     document.write("Bien");
//     break;
//   case `8`:
//     document.write("Notable");
//     break;
//   case `9`:
//     document.write("Notable");
//     break;
//   case `10`:
//     document.write("Sobresaliente");
//     break;
//   default:
//     document.write("Numero erroneo");
//     alert("Introduce un numero valido")
// }

// Ejercicio 10

let filas = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columnas"));
let resultado = filas * columnas;

document.write(`<table class="tablaDatos"><tbody>`);
for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
  document.write(`<tr>`);
  for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
    document.write(`<td>${resultado}</td>`);
    resultado--;
  }
  document.write(`</tr>`);
}
document.write(`</tbody></table>`);
