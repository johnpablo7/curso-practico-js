const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// const parrafoClase = document.querySelector('.parrafoClase');
// const parrafoId = document.querySelector('#parrafoId');
const parrafoClase = document.getElementsByClassName('parrafoClase');
const parrafoId = document.getElementById('parrafoId');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafoClase,
  parrafoId,
  input
});

h1.innerHTML = "Naruto <br> Shippuden"; // Esto es un cambio de un elemento HTML a HTML
h1.innerText = "Naruto <br> Shippuden"; // Esto es un texto normal
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'title');

h1.classList.add('bonito');
h1.classList.remove('titulo');
// h1.classList.toggle('titulo'); // para eventos: agregar o quitar clases
// h1.classList.contains('titulo'); // especie de condicional tru o false

input.value = "456"

// console.log(document.createElement('span'));
const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/736x/87/74/3d/87743da55722be285e4ef486e466c8c2.jpg');
console.log(img);

parrafoId.innerHTML = "";
parrafoId.append(img);
