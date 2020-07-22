function mostrar()
{
//declaro variables
let destino;

//asigno el valor del cuadro de texto a la variable destino
destino = document.getElementById("txtIdDestino").value;

//planteo el switch
switch(destino)
{
	case "Bariloche":
		alert("En el destino hace FRIO.");
	break;
	case "Cataratas":
		alert("En el destino hace CALOR.");
	break;
	case "Mar del plata":
		alert("En el destino hace CALOR.");
	break;
	case "Ushuaia":
		alert("En el destino hace FRIO.");
	break;
}

}//FIN DE LA FUNCIÓN