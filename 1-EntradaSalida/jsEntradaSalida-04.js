/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//primero declaro tantas variables como datos que mi programa va a necesitar guardar. Es una buena practica declarar todas las variables al inicio.
	//DECLARACION DE VARIABLES
	let nombre; 
	//ASIGNACION DE VARIABLES
	nombre = prompt ("Ingrese su nombre:");//asigno el prompt a la variable nombre
	//ahora debo copiar el contenido de nombre en la caja de texto embebida del html:
	document.getElementById("txtIdNombre").value = nombre 
	/*copio en la caja de texto embebida 
	del html lo que el usuario ingreso por la ventana emergente y tengo guardado en la 
	variable nombre*/



	
}
