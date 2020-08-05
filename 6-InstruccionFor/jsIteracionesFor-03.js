function mostrar()
{
//declaro variables
let repeticiones;

repeticiones = parseInt(prompt("Ingrese el numero de repeticiones."));
while (!(repeticiones>0))
{
	repeticiones = prompt("El valor ingresado no es un numero. Ingrese un numero");
}
for (i = 0; i < repeticiones; i ++)
{
	console.log((i+1)+". Hola UTN FRA");
}
}//FIN DE LA FUNCIÓN