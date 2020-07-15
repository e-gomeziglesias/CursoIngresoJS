function mostrar()
{
	//declaro la variable
	let edad;
	//el valor ingresa por id. Debo convertirlo a numero y asignarlo a la variable edad
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//Escribo la condición
	if (edad < 13) //condicion niño
	{
	alert ("La persona es un niño");
	}
	else if (edad >=13 && edad <18)//condicion adolescente
	{
	alert("La persona es adolescente");
	}
	else
	{	
	alert("La persona es mayor de edad");//condicion mayor de edad
	}

}//FIN DE LA FUNCIÓN