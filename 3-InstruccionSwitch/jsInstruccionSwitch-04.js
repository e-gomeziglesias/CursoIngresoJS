function mostrar()
{
//declaro variables

let mes;

// cargo la variable mes con los datos del desplegable

mes = document.getElementById("txtIdMes").value;

//meses de 28 dias FEBRERO
//meses de 30 dias abril junio septiembre noviembre
//meses de 31 dias	enero marzo mayo julio agosto octubre diciembre
	
switch(mes)
{
	case "Febrero":
		alert("Tiene 28 dias.");
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Tiene 30 dias.");
		break;
	default :
		alert("Tiene 31 dias.");
		break;
}
}//FIN DE LA FUNCIÓN