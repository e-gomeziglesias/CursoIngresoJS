function mostrar()
{
  //declaro variables
  let destino;
  let estacion;
  
  //cargo los datos del desplegable en la variables
  
  destino = document.getElementById("txtIdDestino").value;
  estacion = document.getElementById("txtIdEstacion").value;
  
//planteo el switch anidado
switch(estacion)
{
	case "Invierno":
		switch(destino)
		{
			case "Bariloche":
			  alert("Se viaja.");
			  break;
			  
			case "Mar del plata":
			case "Cataratas":
			case "Cordoba":
			  alert("No se viaja.");
			  break;
		}
	break;
	case "Verano":
		switch(estacion)
		{
			case "Mar del plata":
			case "Cataratas":
			  alert("Se viaja.");
			  break;
			case "Bariloche":
			case "Cordoba":
			  alert("No se viaja.");
			  break;
		}
	break;
	case "Otoño":
		switch(estacion)
		{
			case "Bariloche":
			case "Mar del plata":
			case "Cataratas":
			case "Cordoba":
			  alert("Se viaja.");
			  break;
		}
	break;
	case "Primavera":
		switch(estacion)
		{
			case "Bariloche":
			  alert("No se viaja.");
			  break;
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
			  alert("Se viaja.");
			  break;
		}
	break;
}
  
}//FIN DE LA FUNCIÓN