function mostrar()
{
	//Declaro variables
	let edad;
	//El dato de edad ingresa por Id. Lo convierto en numero y lo asigno a la variable edad
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//Escribo la condición
	if (edad >= 18)
	{
	alert("La persona es mayor de edad"); //condicion condicion true
	}
	else
	{
	alert("La persona es menor de edad"); //condicion false
	}
	alert("Fin de la funcion"); //mensaje despues de la condicion
}