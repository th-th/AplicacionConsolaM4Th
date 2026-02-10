// Lección 1

const nombre = prompt('Escriba su nombre');
alert(`Bienvenido ${nombre}`);
console.log(`Bienvenido/a ${nombre} a la aplicación en consola`);

// Lección 2

const numUno = (prompt('Ingrese un número'));
const numDos = (prompt('Ingresa otro número'));
const numUnoParsed = parseInt(numUno);
const numDosParsed = parseInt(numDos);

function esNumero(variable){
    return typeof variable === "number" && !isNaN(variable);
};

if (!esNumero(numUnoParsed) && !esNumero(numDosParsed)){
    console.log(`${numUno} y ${numDos} no son números.`);
} else if (!esNumero(numUnoParsed)) {
    console.log(`${numUno} no es un número.`);
} else if (!esNumero(numDosParsed)){
    console.log(`${numDos} no es un número.`);
} else {
    const suma = numUnoParsed + numDosParsed;
    const resta = numUnoParsed - numDosParsed;
    const multiplicacion = numUnoParsed * numDosParsed;
    const division = numUnoParsed / numDosParsed;

    console.log(`La suma de ${numUno} + ${numDos} es ${suma}.`);

    console.log(`El resultado de la resta entre ${numUno} - ${numDos} es ${resta}.`);

    console.log(`El producto de la multiplicación entre ${numUno} * ${numDos} es ${multiplicacion}.`);

    if (numDosParsed === 0) {
        console.log(`No es posible dividir ${numUno} / ${numDos} ya que el resultado es indefinido`);
    } else {
        console.log(`La división entre ${numUno} / ${numDos} es ${division}.`);
    }
}

// Lección 3

const nombreMascotas = ["Mufasa", "Timón", "Kimba", "Nala", "Tito", "Draco"];

nombreMascotas.forEach(mascota => console.log(mascota));

const mascotasFiltradas = nombreMascotas.filter(mascota => mascota != "Draco");

let indice = 0;

while (indice < mascotasFiltradas.length) {
    console.log(mascotasFiltradas[indice]);
    indice++;
}


