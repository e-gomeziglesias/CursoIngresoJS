function mostrar()
{
//declaro variable

let hora;

hora = parseInt(document.getElementById("txtIdHora").value); //asigno el valor de la caja de texto a la variable

switch(hora)
{
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		alert("Es de manana");
		break;
}

	



}//FIN DE LA FUNCIÓN