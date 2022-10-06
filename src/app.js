/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarCartas() {
    let palos = ["♦", "♥", "♠", "♣"];
    // let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let paloaleatorio = palos[Math.floor(Math.random() * palos.length)];
    let numeroaleatorio = number[Math.floor(Math.random() * number.length)];

    document.getElementById("nuevascartas").innerHTML += `
      <div class="card col-3 m-3 text-center" >
        <div class="d-flex justify-content-start card" id="paloarriba">${paloaleatorio}</div>
        <div class="d-flex justify-content-center card" id="numerocentro">${numeroaleatorio}</div>
        <div class="d-flex justify-content-end card" id="paloabajo">${paloaleatorio}</div>
      </div>`;

    let aleatorio = [numeroaleatorio, paloaleatorio];
    return aleatorio;
  }
  // generarCartas();

  //Generar un Array con la cantidad de cartas según el imput

  let arrCartas = [];

  function generarArray() {
    arrCartas = [];
    let cantidadDeCartas = document.getElementById("numero-cartas").value;
    document.getElementById("nuevascartas").innerHTML = "";
    for (let i = 0; i < cantidadDeCartas; i++) {
      let cartaAleatoria = generarCartas();
      arrCartas.push(cartaAleatoria);
    }
    console.log(arrCartas);
    return arrCartas;
  }

  //Btn genera  las cartas
  document
    .getElementById("btncrearcartas")
    .addEventListener("click", generarArray);

  //ordenarlas

  const bubbleSort = arr => {
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        if (arr[index][0] > arr[index + 1][0]) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }
    return arr;
  };

  document.getElementById("btnordenar").addEventListener("click", function() {
    let newArrOrdenado = bubbleSort(arrCartas);

    document.getElementById("nuevascartas").innerHTML = "";
    for (let index = 0; index < newArrOrdenado.length; index++) {
      // console.log(newArrOrdenado[index][1]);
      document.getElementById("nuevascartas").innerHTML += `
        <div class="card col-3 d-flex m-3">
          <div class="card" id="paloarriba">${newArrOrdenado[index][1]}</div>
          <div class="card" id="numerocentro">${newArrOrdenado[index][0]}</div>
          <div class="card" id="paloabajo">${newArrOrdenado[index][1]}</div>
        </div>`;
    }
    // console.log(newArrOrdenado);
  });
  //btn que las muestre ordenadas
};
