var str = '';
var display = document.querySelector('.result');

var btn = document.querySelectorAll('.btn_act');

for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', input);
}

var result = document.querySelector('.is');
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
	var answer = eval(str);
	str = answer;
	display.innerHTML = answer;
}