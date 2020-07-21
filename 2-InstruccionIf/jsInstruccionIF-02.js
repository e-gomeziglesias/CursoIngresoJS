function mostrar()
{
	//declaro variables
	let edad;
	//la edad ingresa por id. Asigno dicho valor a la variable y la convierto en numero
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//escribo la condición
	if (edad >= 18)
	{
	alert("La persona es mayor de edad"); //muestro mensaje por pantalla del bloque if
	}
	alert("Fin de la función"); //muestro mensaje por pantalla despues del if
}