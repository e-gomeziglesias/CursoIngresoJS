function mostrar()
{
//declaro variables

let mes;
mes = document.getElementById("txtIdMes").value;

//Primer forma, usando IF - ELSE IF
/*if (mes == "Enero")
{
	alert("Que comiences bien el anio!");
}
else if (mes == "Marzo")
{
	alert("A clases!");
}
else if(mes == "Julio")
{
	alert("Se vienen las vacaciones!");
}
else if(mes == "Diciembre")
{
	alert("Felices Fiestas");
}*/
// OTRA FORMA - USANDO SWITCH

switch (mes)
{
	case "Enero":
		alert("Que comiences bien el ano!");
		break;
	case "Marzo":
		alert("A clases!!!");
		break;
	case "Julio":
		alert("Se vienen las vacaciones");
		break;
	case "Diciembre":
		alert("Felices fiestas!!!");
		break;
}
}//FIN DE LA FUNCIÓN