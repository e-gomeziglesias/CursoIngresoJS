/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaración de variables
	let sueldo;
	let resultado;
	//tomo el valor del ingresado por html y lo convierto a numero
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	//aplico el aumento y lo guardo en resultado
	resultado = sueldo * 1.1;
	/*para mostrar el resultado en el cuadro embebido, debo copiar
	el contenido de la variable resultado en el valor del elemento de dicho cuadro 
	del html.*/
	document.getElementById("txtIdResultado").value = parseInt(resultado);
	//obs: aplico parseInt a resultado para que se muestre el numero entero y no todos los decimales
}
