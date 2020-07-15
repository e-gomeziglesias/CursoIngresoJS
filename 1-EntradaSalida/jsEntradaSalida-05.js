/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaro variables, una por cada caja de texto del html
	let nombre;
	let edad;

	//ahora debo ir a buscar los datos tomados por id y copiarlos a las variables correspondientes
	nombre = document.getElementById("txtIdNombre").value; //copio el valor de caja de texto nombre en variable nombre
	edad = document.getElementById("txtIdEdad").value; //copio el valor de  caja de texto edad en variable edad

	// ahora debo mostrarlos por pantalla, por ejemplo con un alert, concatenados.

	alert("Usted se llama "+nombre+" y tiene "+edad+" años."); /* los "+" me permiten concatenar
	literales de cadena con variables o bien varias variables*/
	// alert (`Usted se llama ${nombre} y tiene ${edad} años.`); esta es otra forma, usando back tick
}
