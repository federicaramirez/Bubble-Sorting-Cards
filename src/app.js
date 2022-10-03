/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarCartas() {
    let palos = ["♦", "♥", "♠", "♣"];
    let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

    let paloaleatorio = palos[Math.floor(Math.random() * palos.length)];
    let numeroaleatorio = number[Math.floor(Math.random() * number.length)];

    // document.getElementById("paloarriba").innerHTML = paloaleatorio;
    // document.getElementById("paloabajo").innerHTML = paloaleatorio;
    // document.getElementById("numerocentro").innerHTML = numeroaleatorio;
    document.getElementById(
      "nuevascartas"
    ).innerHTML += `<div class="cuerpocarta">
    <div class="container-fluid text-center">
      <div class="card" style="width: 18rem;">
        <div class="card" id="paloarriba">${paloaleatorio}</div>
        <div class="card" id="numerocentro">${numeroaleatorio}</div>
        <div class="card" id="paloabajo">${paloaleatorio}</div>
      </div> </div> </div>`;

    let aleatorio = [numeroaleatorio, paloaleatorio];
    return aleatorio;
  }
  // generarCartas();

  //Generar un Array con la cantidad de cartas según el imput

  let arrCartas = [];

  function generarArray() {
    let cantidadDeCartas = document.getElementById("numero-cartas").value;
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

  //btn que las muestre
};
