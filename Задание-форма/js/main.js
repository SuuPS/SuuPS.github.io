


let chec1 = document.querySelector('#c-1');
let chec2 = document.querySelector('#c-2');
let imgC1 = document.querySelector('.img-check-1');
let imgC2 = document.querySelector('.img-check-2');
let imgStyle1 = document.querySelector('.img-style-1');
let imgStyle2 = document.querySelector('.img-style-2')
chec1.onclick = function () {
	imgC1.src = 'img/1.svg';
	imgC2.src = 'img/2.svg';
    imgStyle1.style.transform = 'rotate(360deg)';
    imgStyle1.style.transition = '0.8s';
    imgStyle2.style.transform = 'rotate(0deg)';
    imgStyle2.style.transition = '0.8s';
}
chec2.onclick = function () {
	imgC1.src = 'img/2.svg';
	imgC2.src = 'img/1.svg';
	imgStyle2.style.transform = 'rotate(360deg)';
    imgStyle2.style.transition = '0.8s';
    imgStyle1.style.transform = 'rotate(0deg)';
    imgStyle1.style.transition = '0.8s';
}
let btnPost = document.querySelector('.btn-post');
let formControl = document.querySelectorAll('.form-control');
let modal = document.querySelector('.modal-flex');
let modalWindow = document.querySelector('.modal');

let undi = document.querySelector('.undi');
undi.onclick = () => {
	modal.innerHTML = '';
	modalWindow.style.top = '-500px';
}


btnPost.onclick = function (event) {
	event.preventDefault();
let out = '';

for (let i = 0; i < formControl.length; i++) {

		out += formControl[i].value + '<br>';
}
modal.innerHTML = out;
modalWindow.style.top = '200px';
}







