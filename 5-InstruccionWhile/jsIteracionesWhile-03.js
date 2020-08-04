/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave; // declaro variables

	clave = prompt("Ingrese la clave."); //cargo el valor por ventana emergente
	//armo el bucle de validacion de clave
	//while (clave != "utn750") //conndicion verdadera cuando el dato sea invalido
	//{
	//clave = prompt("La clave ingresada es INCORRECTA. Ingrese la clave nuevamente.");
	//}
	//opcion 2 Dato no valido
	while ((!(clave=="utn750")))
	{
	clave = prompt("La clave ingresada es INCORRECTA. Ingrese la clave nuevamente.");
	}
	
	
}//FIN DE LA FUNCIÓN
