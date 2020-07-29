/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
// declaro variables
let numero;
let respuesta; //variable de control
let positivo = 0; //identidad suma
let negativo = 1; //identidad multiplicacion

//bucle para cargar datos 

do
{
	numero = parseInt(prompt("Ingrese un numero"));
	respuesta = prompt("Desea ingresar otro numero? 's' o 'n'.") //modificacion de la variable de control
	if (numero >= 0) //condicion para sumar los positivos
	{
		positivo = positivo + numero; 
	}
	else //condicion para multiplicar los negativos
	{
		negativo = negativo * numero;
	}
} while (respuesta == 's');

//guardo los datos en los textbox

document.getElementById("txtIdSuma").value = "Suma de los positivos: " +positivo;
document.getElementById("txtIdProducto").value = "Producto de los negativos: " +negativo;



}//FIN DE LA FUNCIÓN