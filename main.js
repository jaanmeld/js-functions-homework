function resta(a, b) {
    return a - b
}
console.log(resta(6,9))

//Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

function resultado() {
 let nota = prompt ("Please enter the note")
    switch (true) {
        case nota >10:
            console.log("Esta nota no es valida!!!")
            break;
        case nota >= 9:
        console.log("Sobresaliente");
            break;
        case nota >=7:
            console.log("Notable");
            break;
        case nota >=5:
                console.log("Suficiente");   
                break; 
          case nota >=0:
              console.log("Insuficiente");   
              break; 
        default: console.log("La note introducida no es valida!!!")
            break;
    }
    
}
console.log(resultado())

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.

function duplicaNumero() {
let num = prompt ("Please enter a number");
    num = +num;
    if (isNaN(num)) {
    return ("Is this a number???")
 }
 return num *2;
}
// console.log(duplicaNumero())

function caracterInicial(smth) {
     if ( smth == "")  {
        return ("Debo ser ejecutada con un string no vacío");
    }
    else if (typeof smth == "string") {
        return smth[0] }
    else {
        return ("Debo ser ejecutada con un string");
    }
} 
console.log(caracterInicial("hol"))

// Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.○	Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.

function ultimoCaracter(smth) {
    if ( smth == "")  {
        return ("Debo ser ejecutada con un string no vacío");
    }
    else if (typeof smth == "string") {
        return smth.slice(-1) }
    else {
        return ("Debo ser ejecutada con un string");
    }
} 
console.log(ultimoCaracter("Helloween"))

//Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres. 
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.

function cuentaCaracteres(smth)  {
    if ( smth == "")  {
        return ("Debo ser ejecutada con un string no vacío");
    }
    else if (typeof smth == "string") {
        return smth }
    else {
        return ("Debo ser ejecutada con un string");
    }

}
console.log(cuentaCaracteres("sdctrsdfsdfsdfdffsd").length)

//Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
//Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.

function esPalindromo(smth) {
    rev = "";
    if ( smth == "")  {
        return ("no es un formato correcto");
    }
    else if (typeof smth == "string") {
        for (let i = smth.length - 1; i >= 0; i--) {
            rev += smth[i];
        }
            if (smth == rev) {
                return (smth + " es políndromo");
            }
            else {
                return (smth + " NO es poíndromo")
            }  
    }
    else {
        return ("Debo ser ejecutada con un string");
    }    
}
console.log(esPalindromo("rarar"))

//Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
//Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.

function getPrecioMostrar(price) {
    price = +price
    if (typeof price != "number" || isNaN(price)) {
        return ("no es un formato correcto");
    } else {
        return (price.toFixed(2) + " €");
    }
}
console.log(getPrecioMostrar("66"))

//Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.

function divide(a, b) {
    return a / b;   
}
console.log(divide(21,7))

//Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].

function filter5up(){
    const numeros = [3, 6, 8, 2, 88, 1, 34]
    let newNr =[]
    for (let i = 0; i < numeros.length; i++) {
        nr = numeros[i]
        if (nr >= 5){
            newNr.push(nr)
        }
    }
 return newNr;
}
console.log(filter5up())

//Crea una aplicación que nos pida un número por prompt y, con un método, se lo pasemos por parámetro para que nos indique si es o no un número primo. Debe devolver true si es primo, sino false. 
//Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.


function primeNr() {
    let entry = prompt ("Lets test this number!")
    entry = +entry  // convert typof nr
    switch (true) {
        case entry %2 == 0 : // not a prime
            return (false);
            break;
        case entry %3 == 0 : // not a prime
            return (false);
            break;
        case entry %5 == 0 : // not a prime
            return (false);
            break;
        case entry %7 == 0 : // not a prime
            return (false);
            break;
        default:
            return (true);
            break;
    }
}
console.log(primeNr())

//Crear la función obtenerImpares que acepte como argumento un array de números y devuelva un array con los elementos impares.

function obtenerImpares() {
    const numeros = [3, 6, 8, 2, 88, 1, 34, 77, 97, 322]
    let impares = []
    for (let i = 0; i < numeros.length; i++) {
        const nr = numeros[i];
        if (nr %2 != 0) {
            impares.push(nr)
        }       
    }
return impares;
}
console.log(obtenerImpares())

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6.

function sumarArray() {
    const source = [1, 2, 3];
    let i = 0;
    result = 0;
    while (i < source.length) {
        result = result + source[i];
        i++;
    }
    return result;
}
console.log(sumarArray())

//Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24.

function multiplicarArray() {
    const source = [2, 3, 4]
    let result = 1;
    let i = 0;
    while (i < source.length) {
        result = result * source[i];
        i++
    }
    return result;
}
console.log(multiplicarArray())

//Crea una función checkPassword con una variable tipo string que contenga una contraseña cualquiera. Después, se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes, ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena” (ej. un alert). Piensa bien en la condición de salida (3 intentos y, si acierta, sale aunque le queden intentos).

function checkPassword() {
    const password = "hola";
    i = 3                       // 3 attempts
    while (i != 0 ) {
        let attempt = prompt ("Please enter the password");
        if (attempt == password) {
            alert("Enhorabuena")
            break;
        }
        i--
        if (i == 0) {
            alert("3 intents wrong!")
        }
    }   
}
console.log(checkPassword())