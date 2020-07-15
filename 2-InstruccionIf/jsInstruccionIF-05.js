function mostrar()
{
	//declaro las variables
	let edad;
	//el valor de edad ingresa por id. Debo convertirlo a numero y guardarlo en la variable edad
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//ahora escribo la condición (adolescente = 13<=edad<=17)
	if (edad <13 || edad >17) //para que entre al if, debe cumplirse una u otra condición
	{
	alert("La persona NO es adolescente");
	}

}//FIN DE LA FUNCIÓN