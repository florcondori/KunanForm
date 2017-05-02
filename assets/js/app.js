window.addEventListener("load", function(){
	var arrayMensajeError = [];
	var arrayInputText = document.getElementsByClassName("js-input-text");
	var arrayInputNumber = document.getElementsByClassName("js-input-number");
	var arrayInputFecha = document.getElementsByClassName("js-input-fecha");

	console.log(arrayInputText);
	for(var i=0; i<arrayInputText.length; i++){
		arrayInputText[i].onkeypress = soloLetras;
	}

	for(var i=0; i<arrayInputNumber.length; i++){
		arrayInputNumber[i].onkeypress = soloNumeros;
	}

	var guardar = document.getElementById("guardar");
	guardar.addEventListener("click", function(e){
		e.preventDefault();
		for(var i=0; i<arrayInputFecha.length; i++){
			if(!/(0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0-1]{1})\\(0[1-9]{1}|1[0-2]{1})\\((19|20)[0-9]{2})/.test(arrayInputFecha[i].value)){
				var pregunta = arrayInputFecha[i].previousElementSibling.innerHTML;
				var mensaje = new MensajeError(pregunta,arrayInputFecha[i].value,"Tiene que tener este formato dd/mm/yyyy");
				arrayMensajeError.push(mensaje);
				console.log(arrayMensajeError);
			}else{
				continue;
			}
		}
	});
});

function soloLetras(e){
	var code = e.keyCode;
	  if((code>=97 && code<=122) ||(code>=65 && code<=90) || code==39 || code==32 || code==241 || code==209){
	    return true;
	  }else{
	    return false;
	  }
};

function soloNumeros(e){
	var code = e.keyCode;
	  if(code>=48 && code<=57){
	    return true;
	  }else{
	    return false;
	  }
};

function MensajeError(pregunta,respuesta, mensaje){
	this.pregunta = pregunta;
	this.respuesta = respuesta;
	this.mensaje = mensaje;
}