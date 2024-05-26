/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// La función onload se ejecuta cada vez que se abra la ventana
window.onload = function() {
  /**
   * -------------------ELECCION PALO---------------------
   */
  let claseAImprimir;
  let palosAleatorios = Math.floor(Math.random() * 4) + 1;

  /**
   * Una vez que tenemos los palosAleatorios valida los numeros generados
   * anteriormente y según el número que salga se añade una clase u otra al elemento
   * capturado en el html
   * @param .getElementById("palo"); = Seleccionamos el elemento html al que queremos hacer referencia.
   * @param .classList.add("hearts"); = añadimos la clase seleccionada entre () al elemento seleccionado anteriormente.
   */
  if (palosAleatorios == 1) {
    claseAImprimir = document.getElementById("palo");
    claseAImprimir.classList.add("hearts");
  } else if (palosAleatorios == 2) {
    claseAImprimir = document.getElementById("palo");
    claseAImprimir.classList.add("clubs");
  } else if (palosAleatorios == 3) {
    claseAImprimir = document.getElementById("palo");
    claseAImprimir.classList.add("spades");
  } else if (palosAleatorios == 4) {
    claseAImprimir = document.getElementById("palo");
    claseAImprimir.classList.add("diamonds");
  }
  /**
   * -------------------ELECCION CARTA---------------------
   */
  let baraja = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "king",
    "queen",
    "jota"
  ];

  let cartaAleatoria = Math.floor(Math.random() * 11);
  let cartaElegida = baraja[cartaAleatoria];

  /**
   * Una vez que ha hecho el random numérico y lo asociamos al array de baraja
   * capturamos el elemento donde se sustituirá el número de la cara por la que salga.
   */

  if (cartaElegida == "queen") {
    let numeros = document.getElementById("number");
    numeros.classList.add("queen");
  } else if (cartaElegida == "king") {
    let numeros = document.getElementById("number");

    numeros.classList.add("king");
  } else if (cartaElegida == "jota") {
    let numeros = document.getElementById("number");

    numeros.classList.add("jota");
  } else {
    let numeros = document.getElementById("number");

    numeros.innerHTML = cartaElegida;
  }
};
