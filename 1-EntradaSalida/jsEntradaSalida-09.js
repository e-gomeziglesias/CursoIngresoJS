/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaración de variables
	let sueldo;
	let aumento; 
	let nuevoSueldo;
	//tomo el valor del ingresado por html y lo convierto a numero float, porque los sueldos tienen centavos
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	//aplico el aumento y lo guardo en resultado
	aumento = sueldo * 10 / 100; //calculo del % de aumento
	nuevoSueldo = sueldo + aumento;
	/*para mostrar el nuevo sueldo en el cuadro embebido, debo copiar
	el contenido de la variable nuevoSueldo en el valor del elemento de dicho cuadro 
	del html.*/
	document.getElementById("txtIdResultado").value = nuevoSueldo;
	//obs: aplico parseInt a nuevoSueldo para que se muestre el numero entero y no todos los decimales
}
