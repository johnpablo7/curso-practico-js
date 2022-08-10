const body = document.querySelector('body');
const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const calc = document.querySelector('#calculate');
const sum = document.querySelector('#sum');
const res = document.querySelector('#res');
const mult = document.querySelector('#mult');
const div = document.querySelector('#div');

const result = document.createElement('h2');

function calculate() {
  let value1 = Number(val1.value);
  let value2 = Number(val2.value);
  let resValue = 0;

  if (sum.checked) {
    resValue = value1 + value2;
  } else if (res.checked) {
    resValue = value1 - value2;
  } else if (mult.checked) {
    resValue = value1 * value2;
  } else {
    resValue = value1 / value2;
  }

  resValue = `El resultado es: ${resValue}`;
  result.innerHTML = resValue;
  body.append(result);
}

