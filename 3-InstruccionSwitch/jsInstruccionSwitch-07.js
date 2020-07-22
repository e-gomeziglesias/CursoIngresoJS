function mostrar()
{
//declaro variables
let destino;

//asigno el valor del cuadro de texto a la variable destino
destino = document.getElementById("txtIdDestino").value;

//planteo el switch
switch(destino)
{
	case "Bariloche":
		alert("El destino se encuentra al Oeste.");
	break;
	case "Cataratas":
		alert("El destino se encuentra al Norte.");
	break;
	case "Mar del plata":
		alert("El destino se encuentra al Este.");
	break;
	case "Ushuaia":
		alert("El destino se encuentra al Sur");
	break;
}

}//FIN DE LA FUNCIÓN