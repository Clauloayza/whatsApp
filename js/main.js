//--------------------------------Agregar mensaje

var mensaje;
var chat;


window.onload = inicializar;


function inicializar(){
	mensaje= document.getElementById("mensajes");
    chat= document.getElementById("chat");
	mensaje.addEventListener('keyup', onInputKeyUp);
}

function onInputKeyUp(evt){
	
    if(evt.keyCode==13 && mensaje.value.length!=0){
        sendMensaje();
    }
}

function sendMensaje(){
	var chat= document.getElementById("chat");
	var texto= mensaje.value;
	var cuadro= document.createElement('div');
	cuadro.className="w-message w-message-out";
	var cuadro2= document.createElement('div');
	cuadro2.className="w-message-text";
	var parrafo= document.createElement('p');
	var time= document.createElement('div');
	time.className="time";
	
	var horario= new Date();
	var hora= horario.getHours();
	var minuto= horario.getMinutes();
	
	if(minuto<10){
		minuto='0'+minuto;
	}
	
	chat.scrollTop==chat.scrollHeight;
	
	time.innerHTML=hora+":"+minuto;
	parrafo.innerHTML=texto;
	cuadro.appendChild(cuadro2);
	cuadro2.appendChild(parrafo);
	cuadro2.appendChild(time);
	chat.appendChild(cuadro);
	
	mensaje.value="";
    mensaje.focus();
    
}

