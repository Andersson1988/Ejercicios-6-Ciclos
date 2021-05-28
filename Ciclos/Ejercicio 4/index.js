// 4. Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones. //

let entero=parseInt(prompt("inserte un numero entero"));
let fac=parseInt(1);

function factorial(entero,fac){
    for (let numero=1;numero<=entero;numero++){
        fac=fac*numero;    
    }
    return fac;
}

let valor=factorial(entero,fac);
console.log(valor);
    












































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