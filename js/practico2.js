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

// // ejercicio 3
// let texto = confirm("Ingrese un texto");
// let cadena = cadena.lenght;
// let longitud;

// while (let i = 0; i < cadena;
//   i++){
//   longitud = texto.charAt(i);
//   if (i === cadena - 1){
//     document.write(longitud);
//   } else {
//     document.write(longitud + "-");
//   }
// }

// // ejercicio 4

// let numeros = confirm("Ingrese un numero");
// let sum = 0;
// let i;

// while(i = 0; i < numeros.lenght; i++) {
//   if(isNaN(numeros)){
//     console.log(sum += numeros)
//   } else {
//     alert ( "Debe ingresar un numero")
//   }
// }

// // Ejercicio 5
// let resto = 0;
// let letra = "";

// do {
//     let numero = prompt("Introduce tu dni");
//     if (Number(numero) == numero) {
//         numero = Number(numero);
//         if (numero >= 0 && numero <= 99999999) {
//             resto = numero % 23;
//             switch (resto) {
//                 case 0:
//                     letra = "T";
//                     break;
//                 case 1:
//                     letra = "R";
//                     break;
//                 case 2:
//                     letra = "W";
//                     break;
//                 case 3:
//                     letra = "A";
//                     break;
//                 case 4:
//                     letra = "G";
//                     break;
//                 case 5:
//                     letra = "M";
//                     break;
//                 case 6:
//                     letra = "Y";
//                     break;
//                 case 7:
//                     letra = "F";
//                     break;
//                 case 8:
//                     letra = "P";
//                     break;
//                 case 9:
//                     letra = "D";
//                     break;
//                 case 10:
//                     letra = "X";
//                     break;
//                 case 11:
//                     letra = "B";
//                     break;
//                 case 12:
//                     letra = "N";
//                     break;
//                 case 13:
//                     letra = "J";
//                     break;
//                 case 14:
//                     letra = "Z";
//                     break;
//                 case 15:
//                     letra = "S";
//                     break;
//                 case 16:
//                     letra = "Q";
//                     break;
//                 case 17:
//                     letra = "V";
//                     break;
//                 case 18:
//                     letra = "H";
//                     break;
//                 case 19:
//                     letra = "L";
//                     break;
//                 case 20:
//                     letra = "C";
//                     break;
//                 case 21:
//                     letra = "K";
//                     break;
//                 case 22:
//                     letra = "E";
//                     break;
//                 default:
//                     alert("Numero erroneo");
//             }
//         }
//         alert("Numero: " + numero + ", Letra: " + letra);
//     }
//     else {
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }
// } while (numero != undefined);

// ejercicio 6

let i;
let rep;

for (i = 1; i <= 30; i++) {
    for (rep = 0; rep < i; rep++) {
        document.write(i);
    }
    document.write("<br>");
}

// Ejercicio 7

let numrep = prompt("Introduce numero de repeticiones");
if (Number(numrep) == numrep) {
    if (numrep > 0 && numrep <= 50) {
        let rep,i;
        for (i = numrep; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número);
}

// Ejercicio 8

let numRep = prompt("Introduce numero de repeticiones");
if (Number(numRep) == numRep) {
    if (numRep > 0 && numRep <= 50) {
        let rep,i;
        for (i = 0; i <=numRep; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    }else {
        alert("El número introducido no es válido");
    }
}else {
    alert("No has introducido un número);
}

// Ejercicio 9
document.write("<hr>");
let i;
let j = 500;
let rep = 0;
for (i = 1; i <= j; i++) {
    document.write(i);
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    document.write("<br>");
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}

// Ejercicio 10

// let filas = parseInt(prompt("Ingrese un numero de filas"));
// let columnas = parseInt(prompt("Ingrese un numero de columnas"));
// let resultado = filas * columnas;

// document.write(`<table class="tablaDatos"><tbody>`);
// for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
//   document.write(`<tr>`);
//   for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
//     document.write(`<td>${resultado}</td>`);
//     resultado--;
//   }
//   document.write(`</tr>`);
// }
// document.write(`</tbody></table>`);

// ejercicio 11

let nombre1 = prompt("Nombre 1:");
let edad1 = Number(prompt("Edad 1:"));

let nombre2 = prompt("Nombre 2:");
let edad2 = Number(prompt("Edad 2:"));

let nombre3 = prompt("Nombre 3:");
let edad3 = Number(prompt("Edad 3:"));

let maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}

// ejercicio 12

let num = Math.floor((Math.random() * 99) + 1);
document.write(num);

// ejercicio 13

let texto = prompt("Introduce el texto");
document.write("TEXTO: " + texto.toUpperCase + ".");

// ejercicio 14

let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;   
let caracter;
let i;
for (i = 0; i < numchar; i++) {
caracter = cadena.charAt(i);    
if (i == numchar - 1) {
    document.write(caracter);
}
else {
    document.write(caracter + "-");
}
}

// ejericio 15

let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;    
cadena = cadena.toUpperCase();  
let car;
let contador = 0;
let i;
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);   
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");

// ejercicio 16

let texto = prompt("Introduce un Texto:");
let numchar = texto.length;
let i;
let car;
let salida = "";
for (i = 0; i < numchar; i++) {
    car = texto.charAt(i);    
    salida = car + salida;
}
document.write(salida);

// ejercicio 17

let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Introduce un texto");
let textomin = texto.toLowerCase();
let posicion = 0;
let parar = false;
for (let i = 0; i < textomin.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);


