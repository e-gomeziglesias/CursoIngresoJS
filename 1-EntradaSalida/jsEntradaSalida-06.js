/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables
	let num1;
	let num2;
	let resultado;

	/*//traigo los valores del html
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	//num1 y num2 son variables string. debo convertirlas a numero:
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	al hacerlo asi, num es primero string y luego es number, es decir
	cambia de tipo de dato. En otros lenguajes esto no es posible de hacer*/

	//puedo hacer todo en menos lineas:

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	// al hacer esto, en num solo guardo un dato numerico, no ando cambiando de tipo de dato.

	//ahora puedo hacer la operacion:
	resultado = num1 + num2;
	
	alert("La suma es "+resultado);
}

