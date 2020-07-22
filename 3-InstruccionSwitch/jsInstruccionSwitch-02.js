function mostrar()
{
//declaro variables
let mes;

//cargo los datos del cuadro de texto
mes = document.getElementById("txtIdMes").value;

//condiciones para cada mes con switch

/*El break  corta la ejecucion y sale del switch. De esta forma, puedo
agrupar los case iguales y poniendo el mensaje o la condicion recien en el ultimo. En este punto, poner 
el break*/

switch(mes)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno");
		break;
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio");
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio. Ahora calor!");
		break;	
}


}//FIN DE LA FUNCIÓN