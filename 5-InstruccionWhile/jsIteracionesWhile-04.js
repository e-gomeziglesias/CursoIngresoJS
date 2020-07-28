/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
//declaro variables
let numero;

//cargo el valor por ventana emergente

numero=parseInt(prompt("Ingrese un numero entre 0 y 9."));

//planteo el bucle
while (!(numero >= 0 && numero <= 9))
{
	numero=parseInt(prompt("Numero INCORRECTO. Ingrese un numero entre 0 y 9."));	
}

document.getElementById("txtIdNumero").value = numero;


}//FIN DE LA FUNCIÓN