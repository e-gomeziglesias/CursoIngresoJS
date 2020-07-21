function mostrar()
{
	//declaro las variables
	let edad;
	let estadoCivil;
	//ambas valores ingresan por Id. Debo copiar su valor a las variables edad y estadoCivil, respectivamente
	edad = parseInt(document.getElementById("txtIdEdad").value); //convierto string a numero
	estadoCivil = document.getElementById("estadoCivil").value;
	//Escribo la condicion
	//edad<18 && estadocivil != "Soltero" es la condicion buscada
	if (edad<18 && estadoCivil != "Soltero") //deben cumplirse en simultáneo
	{
	alert("Es muy pequeno para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN