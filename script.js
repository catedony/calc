let str = '';
const display = document.querySelector('.result');

const btn = document.querySelectorAll('.btn_act');

for (let value of btn) {
	value.addEventListener('click', input);
}

const result = document.querySelector('.is');
result.addEventListener('click', getResult);

var reset = document.getElementById('reset');
reset.addEventListener('click', clear);

function input() {
	str += this.innerHTML;
	display.innerHTML = str;
}

function clear() {
	str = '';
	display.innerHTML = str;
}

function getResult() {
	let answer = eval(str);
	str = answer;
	display.innerHTML = answer;
}