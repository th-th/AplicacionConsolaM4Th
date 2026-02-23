// Lección 1

const nombre = prompt('Escriba su nombre');
alert(`Bienvenido ${nombre}`);
console.log(`Bienvenido/a ${nombre} a la aplicación en consola`);

// Lección 2 y lección 4

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

// Lección 5

/* 
- Crear un objeto con propiedades y valores
- Implementar métodos dentro de un objeto
- Usar un arreglo de objetos y recorrerlo con map o forEach
*/

const mascota = {
  nombre: 'Tito',
  especie: 'Gato',
  edad: 12,
  // Método 
  hablar: function () {
    return `${this.nombre} maúlla`;
  },
};

console.log(mascota.hablar());

const paises = [
  {
    nombre: 'Chile',
    idioma: 'español',
  },
  {
    nombre: 'Australia',
    idioma: 'inglés',
  },
  {
    nombre: 'Islandia',
    idioma: 'islandés',
  },
];

// forEach no devuelve nada
paises.forEach((pais) =>
  console.log(`En ${pais.nombre} se habla ${pais.idioma}`),
);

// map devuelve un nuevo array
const paisesPlaneta = paises.map((pais) => {
  const nuevo = {
    ...pais,
    planeta: 'Tierra',
  };
  return nuevo;
});
console.log(paisesPlaneta);