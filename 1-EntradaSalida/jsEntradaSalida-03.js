/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; //declaro la variable
	nombre = document.getElementById ("txtIdNombre").value; //con esto, a. traigo un elemento del html. b.lo traigo llamandolo por su nombre, que es unico c.value llama, de este elemento, el valor que esta guardado
	alert(nombre); //la ventana emergente tira el valor que se guardo

	document.getElementsById("txtIdNombre").value=""; //al hacer esto, borro el contenido de la caja de texto
}


