/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declaración de variables
	let num1;
	let num2;
	let resultado;
	//Traigo los numeros ingresados por el html
	//Con parseInt los convierto a numero
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);	
	resultado = num1 + num2; //resuelvo la operación
	alert("La suma es "+resultado); //muestro el resultado por pantalla
}

function restar()
{
	//Declaración de variables
	let num1;
	let num2;
	let resultado;
	//Traigo los numeros ingresados por el html
	//Con parseInt los convierto a numero
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);	
	resultado = num1 - num2; //resuelvo la operacion
	alert("La resta es "+resultado); //muestro el resultado por pantalla	
}

function multiplicar()
{ 
	//Declaración de variables
	let num1;
	let num2;
	let resultado;
	//Traigo los numeros ingresados por el html
	//Con parseInt los convierto a numero
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);	
	resultado = num1 * num2; //resuelvo la operación
	alert("El producto es "+resultado); //muestro el resultado por pantalla	
}

function dividir()
{
	//Declaración de variables
	let num1;
	let num2;
	let resultado;
	//Traigo los numeros ingresados por el html
	//Con parseInt los convierto a numero
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);	
	resultado = num1 / num2; //resuelvo la operación
	alert("El cociente es "+resultado); //muestro el resultado por pantalla	
}

