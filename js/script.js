var valor;
function verifica(){
	valor = document.getElementById("testo").value;
	if(valor == ""){
		alert("Por favor informe um valor");
	} else {
		document.getElementById("msg").innerHTML += "<li>"+valor+"</li>";
	}
}

