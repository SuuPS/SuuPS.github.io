var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

let headLeft = document.querySelector('.header-top');
let btnMenu = document.querySelector('.btn-menu');

btnMenu.onclick = function () {
	this.classList.toggle('btn-menu-left');
	headLeft.classList.toggle('header-top-left');
}
