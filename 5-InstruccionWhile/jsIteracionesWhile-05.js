/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
//declaro variables
let sexo;

//cargo los datos por cuadro de texto emergente

sexo = prompt("Ingrese 'f' para femenino o 'm' para masculino");

//dato invalido = sexo distinto a f o m
//while (sexo != 'm' && sexo != 'f')
//dato no valido = sexo no igual a f o m
while (!(sexo == 'm' || sexo == 'f' || sexo == 'F' || sexo =='M'))
{
	sexo = prompt("Sexo incorrecto. Ingrese 'f' para femenino o 'm' para masculino");
}
document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN