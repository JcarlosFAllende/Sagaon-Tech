//metodo sencillo
[2, 5, 8, 1].map(n  => n *2);

//metodo usando funcion
function multiplicacion(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * 2;
}
let numeros = [2, 5, 8, 1];
let solucion = multiplicacion(f,numeros);
console.log(solucion);