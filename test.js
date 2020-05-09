var foo = 123;
if (true) {
    var foo = 456;
}
console.log("Imprimamos foo usando var " + foo);

var faa = 123;
if (true) {
    var faa_1 = 456;
    console.log("Imprimamos faa dentro de bloque let " + faa_1);
}
console.log("Imprimamos foo usando let " + faa);

const opciones = "Hola Typescript";



if (true) {
    const opciones = "constante dentro del bloque";
    console.log('salida del const detnro del bloque ' + opciones);

}

console.log('salida del const ' + opciones);
