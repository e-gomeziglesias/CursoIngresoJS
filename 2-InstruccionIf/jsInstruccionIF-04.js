 function mostrar()
{
	//declaro las variables
	let edad;
	//la edad ingresa por Id. Debo copiar el valor de dicho elemento en la variable edad y convertirlo a numero
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//escribo la condición
	if (edad >= 13 && edad <=17)// el cartel aparece si se cumplen ambas a la vez (true + true = true)
	{
	alert("La persona es adolescente"); //mensaje if true
	}
	alert("Fin de la funcion"); //mensaje despues del if
}