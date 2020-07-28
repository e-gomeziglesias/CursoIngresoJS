/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
//declaro variables
let sexo;

//cargo los datos por cuadro de texto emergente

sexo = prompt("Ingrese 'f' para femenino o 'm' para masculino");

while (!(sexo == "m" || sexo == "f"))
{
	sexo = prompt("Sexo incorrecto. Ingrese 'f' para femenino o 'm' para masculino");
}
document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN