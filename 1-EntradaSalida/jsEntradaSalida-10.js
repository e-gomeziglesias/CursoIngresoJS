/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaro variables
	let importe;
	let resultado;
	//traigo del html el valor ingresado por usuario (string) y lo guardo en formato numero
	importe = parseInt(document.getElementById("txtIdImporte").value);
	//calculo el descuento
	resultado = importe * 0.75;
	//copio el valor de resultado en el elemento del cuadro del html para mostrarlo por pantalla
	document.getElementById("txtIdResultado").value = resultado;
}
