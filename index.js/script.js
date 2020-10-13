
let btn = document.querySelector('.btn');
let out = document.querySelector('.out');


let formPost = document.querySelectorAll('.form-control');

btn.onclick = function (event) {
	event.preventDefault();
	let tab = ''
	for (let i = 0; i < formPost.length; i++) {
		tab += formPost[i].value + '<br>';
	}
	out.innerHTML = tab;
}
let num = +document.querySelector('.number').value;
