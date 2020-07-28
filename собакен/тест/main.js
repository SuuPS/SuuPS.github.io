/*let button = document.querySelector("#btn");

let text = document.querySelector("#text");

function loadPhones(argument) {

	var xhr = new XMLHttpRequest();
	var json = JSON.stringify(
		username: "pc/1455s"; 
		);
	xhr.open('GET', 'http://numbersapi.com/23');
	xhr.send();
	
xhr.onload = function () {
	if(xhr.status !=200){
		alert("Ошибка" + xhr.status);
	}	
	else{
		alert(xhr.response);
	}
};

xhr.onprogress = function (event) {
	// body...
	if(event.lengthComputable){
		alert("получено");
		text.href = `${xhr.response}`;
	}
	else{
		alert("получено2");
	}

};

xhr.onerror = function function_name(argument) {
	// body...
	alert("не удался");
};

};*/


/*
function var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
	if (ajax.readyState == 4 && ajax.status == 200) {
		var response = ajax.responseText;
	}
};
ajax.open(method, URL, true);
ajax.setRequestHeader("Content-type", "application/json");
ajax.send(data);(argument) {
	// body...
}*/

window.onload = function function_name(argument) {
	// body...
	let btn = document.querySelector("#btn");

}



let text = document.querySelector("#text");
btn.onclick = function ajaGet(argument) {
	let register = new XMLHttpRequest();

	register.onreadystatechange = function () {
		if (register.readyState == 4) {
			text.innerHTML = register.responseText;
		}
	}

	register.open('GET', 'Access-Control-Allow-Origin:https://zoom-sp.herokuapp.com/groups');
	register.send();








	register.onprogress = function (event) {
	if(event.lengthComputable){
		alert("получено");
	}
	else{
		alert("получено2");
	}

};

}




