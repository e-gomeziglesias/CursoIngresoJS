/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaración de variables
	let divisor;
	let dividendo;
	let resto;
	//traigo los datos del html, que vienen en string
	//con parseInt los convierto a numero
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	//resuelvo el calculo
	resto = dividendo % divisor;
	//muestro el resultado por pantalla
	alert("El resto es "+resto);
}
