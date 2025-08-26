/*
Ejercicio propuesto por ChatGPT 2:
Declara una constante piTexto = "3.14".
Conviértela a número usando Number().
Imprime en consola el resultado y su tipo (typeof).
Haz un if que compare si piTexto convertido a número es menor que 10.
Si lo es, imprime "El número es pequeño".
Si no, imprime "El número es grande".

Solución hecha a mano por:
Gadiel Guillen (OctoGDX)
Linkedin: /in/gguillenprodev/
*/

const pi = "3.1416";

//conversión de pi a numero
const piString = Number (pi);
console.log (piString, typeof piString);

//Flow control scope de la constante
if (piString < 10) {
    console.log("el numero es pequeño");
    } else {
    console.log ("el numero es mayor");
}

/*
Para convertir el valor de una constante a otro tipo de dato
debemos crear una nueva constante basada en la anterior.

Ejemplo:
const pi = "3.1416";        // pi es un string
const piNumero = Number(pi); // conversión a número

Podemos verificar el resultado con:
console.log(piNumero, typeof piNumero);
*/
