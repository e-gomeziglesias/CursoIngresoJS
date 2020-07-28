/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada; // declaro variables

	claveIngresada = prompt("Ingrese la clave."); //cargo el valor por ventana emergente
	//armo el bucle de validacion de clave
	while (claveIngresada != "utn750")
	{
	alert("La clave ingresada es INCORRECTA.");
	claveIngresada = prompt("Ingrese la clave nuevamente.");
	}

	
	
}//FIN DE LA FUNCIÓN
