function mostrar()
{
//declaro variables

let mes;
mes = document.getElementById("txtIdMes").value; //cargo en la variable el valor del cuadro desplegable

switch(mes)
{
	case "Febrero":
		alert("Este mes NO tiene mas de 29 dias");
		break;
	case "Enero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Este mes tiene 30 o mas dias");
		break;
}
//aplico switch, agrupando febrero por un lado y !=febrero por otro
	
	


}//FIN DE LA FUNCIÓN