

let modalBtn = document.getElementById('modalBtn');
let modalContent = document.getElementById('modalContent');

modalBtn.onclick = function(){
	modalContent.style.top = '20%';
	modalWindow.style.display = 'block';
}
modalWindow.onclick = function(){
	modalContent.style.top = '-800px';
	this.style.display = 'none';
}