/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaro variables
	let importe;
	let descuento;
	let resultado;
	//traigo del html el valor ingresado por usuario (string) y lo guardo en formato numero
	importe = parseFloat(document.getElementById("txtIdImporte").value);
	//calculo el descuento
	descuento = importe * 25/100;
	//aplico el descuento
	resultado = importe - descuento;
	resultado = resultado.toFixed(2); //limito el numero de decimales a mostrar (2)
	//copio el valor de resultado en el elemento del cuadro del html para mostrarlo por pantalla
	document.getElementById("txtIdResultado").value = resultado;
}
