function mostrar()
{
	//Declaro variables
	let edad;
	//El dato de edad ingresa por Id. Lo convierto en numero y lo asigno a la variable edad
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//Escribo la condición
	if (edad >= 18)
	{
	alert("La persona es mayor de edad");
	}
	else
	{
	alert("La persona es menor de edad");
	}
}//FIN DE LA FUNCIÓN