
var foo = 123;
if (true) {
    var foo = 456;    
}
console.log("Imprimamos foo usando var " + foo);


let faa = 123;
if (true) {
    let faa = 456;    
    console.log("Imprimamos faa dentro de bloque let " + faa);
}
console.log("Imprimamos foo usando let " + faa);