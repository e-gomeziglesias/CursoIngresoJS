function mostrar()
{
//declaro variables
let numero;
let par = 0;
//ingreso el numero
numero = prompt("Ingrese numero.");
//bucle para recorrer los numeros desde el 1 hasta el numero ingresado por usuario
for(let i = 1 ; i <= numero; i++ )
{
	//evaluo si es par
	if (i%2==0)
	{
		console.log(i);
		par++;
	}
}
alert("Se encontraron "+par+" numeros pares.")
}//FIN DE LA FUNCIÓN