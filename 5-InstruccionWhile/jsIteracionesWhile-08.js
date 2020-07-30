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
let flag = 0; //inicializo flag de ingreso de negativos

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
		flag = 1 //activo el flag para saaber si se activo este bloque (y se ingreso un negativo)
		negativo = negativo * numero;
	}
} while (respuesta == 's');
 //No estoy teniendo en cuenta ue el usuario puede no ingresar numeros negativos.
 //Si no ingresa negativos, se esta mostrando un 1
// puedo resolverlo con un flag. Si el flag=0 no se ingreso ningun negativo
if (flag==0)
{
negativo = 0;
}
//guardo los datos en los textbox

document.getElementById("txtIdSuma").value = "Suma de los positivos: " +positivo;
document.getElementById("txtIdProducto").value = "Producto de los negativos: " +negativo;



}//FIN DE LA FUNCIÓN