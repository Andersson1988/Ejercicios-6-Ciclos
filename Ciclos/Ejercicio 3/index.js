// 3. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones. //

let n=parseInt(prompt("ingrese numero de estudiantes"));
/*let a=parseFloat(prompt("ingrese nota 1"));
let b=parseFloat(prompt("ingrese nota 2"));
let c=parseFloat(prompt("ingrese nota 3"));*/

function promedio(a,b,c) {
    let nota_promedio=parseFloat(a+b+c)/3;
    return nota_promedio;
}


for (let numero=1;numero<=n; numero++) {
    a=parseFloat(prompt(`ingrese nota 1 de estudiante: ${numero}`));
    b=parseFloat(prompt(`ingrese nota 2 de estudiante: ${numero}`));
    c=parseFloat(prompt(`ingrese nota 3 de estudiante: ${numero}`));

    valor=promedio(a,b,c) .toFixed(3);
    console.log(`El promedio del estudiante: ${numero} es ${valor}`);
}
    
































// 4. Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones.*/












































/* Programe un procedimiento que no reciba parámetros, sume los números 
enteros 12 y 23, e imprima el resultado de la suma de estos dos números. 
Haga las respectivas versiones para pseudocódigo y código. 

function suma() {
    let suma_sin_parametros=12+23;
    return suma_sin_parametros;
}

let valor=suma();
console.log("funcion:",valor);
*/