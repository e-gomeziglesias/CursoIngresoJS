/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declararamos variables
let numero;
let maximo; //inicializo despues
let minimo; //inicializo despues
let respuesta; //no hace falta inicializar porque do while
let flag = 0; //para marcar el primer ingreso

//cargo los datos
do
{
	numero = parseInt(prompt("Ingrese un numero."));
	//verificacion de que es el primer numero ingresado
	// obs: al tener los || no puedo usar if else
	}
	if (flag == 0 || numero > maximo) //en el primer ingreso, maximo es undefined pero no afecta porque en la primer iteracion entro por el flag. obs: comparar un numero con undefined da false
	{
		maximo = numero;
	}
	if (flag == 0 || numero < minimo) //en el primer ingreso, minimo es undefined pero no afecta porque en la primer iteracion entro por el flag.
	{
		minimo = numero;
		flag = 1; //cambio el valor del flag aca y no antes para que la ejecucion pase, la primera vez, por los dos if
	}
	respuesta = prompt ("Desea ingresar otro numero? 's' o 'n'.");
} while(respuesta == 's'); //condicion del bucle
//muestro los datos:

document.getElementById("txtIdMinimo").value = "El minimo ingresado es: "+minimo;
document.getElementById("txtIdMaximo").value = "El maximo ingresado es: "+maximo;

}//FIN DE LA FUNCIÓN