/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let stringNum= num.toString();
  //return typeof stringNum;
  let arrayNum= stringNum.split("");
  let contador= 0;
  let numFinish;

  for (let i=0; i<arrayNum.length; i++){
      for (let j=arrayNum.length-1; j>=0; j--){
          if (arrayNum[i]===arrayNum[j]){
              contador++;
              i++;
          }
      }
  }

  if (contador === arrayNum.length){
      numFinish= arrayNum.join("");
      return true;
  } else return false;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico