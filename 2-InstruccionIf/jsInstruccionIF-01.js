function mostrar()
{
	//declaro las variables
	let edad;
	//la edad ingresa por id. Copio su valor a la variable edad en formato number:
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//escribo la condición
	if (edad==15)
	{
	alert("niña bonita");
	}
	alert ("Fin de la función");
	
}