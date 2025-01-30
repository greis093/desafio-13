import "./style.css";

//1. Selecciono los botones del HTML
const numeros = document.querySelectorAll(".number");
const signos = document.querySelectorAll(".signo");
const display = document.querySelector("#resultado");
const igual = document.querySelector("#igual");
const punto = document.getElementById("punto");
let mostrar = "";
let input = "";
let signo;
let valores = [];

//Registrar en un input los digitos ingresados en la calculadora
numeros.forEach((n) => {
  n.addEventListener("click", () => {
    if (mostrar.length < 13) {
      mostrar += n.innerHTML;
      input += n.innerHTML;
      display.value = mostrar;
    }
  });
});

//Restringir solo un punto para un numero
punto.addEventListener("click", () => {
  if (mostrar.indexOf(".") === -1 && mostrar.length >= 1) {
    mostrar += punto.innerHTML;
    input += punto.innerHTML;
    display.value = mostrar;
  }
});

//Restringir solo un signo por operación
signos.forEach((x) => {
  x.addEventListener("click", () => {
    if (mostrar.indexOf(signo) === -1 && mostrar.length >= 1) {
      //Guardar mi string como un valor de un array
      signo = x.innerHTML;
      console.log(input);
      valores.push(Number(input));
      valores.push(signo);
      mostrar += signo;
      display.value = mostrar;
      input = "";
    }
  });
});

//El display cada vez se realiza click se recetea
display.addEventListener("click", () => {
  display.value = "";
  input = "";
  mostrar = "";
  valores = [];
});
//Los valores los convertimos en un array [ valor1; signo ; valor2]
igual.addEventListener("click", () => {
  valores.push(Number(input));
  let op = operacion(valores[1], valores[0], valores[2]);
  display.value = op;
  input = op;
  mostrar = String(op);
  valores = [];
});

//Los valores ingresador realizan la operación asignada
function operacion(signo, valor1, valor2) {
  switch (signo) {
    case "+":
      return valor1 + valor2;
    case "-":
      return valor1 - valor2;
    case "x":
      return valor1 * valor2;
    case "/":
      return valor1 / valor2;
  }
}
