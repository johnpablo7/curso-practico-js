const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const val1 = document.querySelector('#calculo1');
const val2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
  // console.log({ event });
  event.preventDefault();
  const sumarInputs = val1.value + val2.value;
  result.innerText = "Resultado: " + sumarInputs;
}

// form.addEventListener('mouseover', enviarFormulario);

// function enviarFormulario(e) {
//   // console.log({ event });
//   e.preventDefault();

//   alert("virus")
// }

