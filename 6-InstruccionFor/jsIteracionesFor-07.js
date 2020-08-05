function mostrar()
{
//declaro variables
let numero;
let contadorDivisores = 0;
//ingreso el numero
numero = prompt("Ingrese numero.");
//bucle para recorrer los numeros desde el 1 hasta el numero ingresado por usuario
for(let i = 1 ; i <= numero; i++ )
{
	//evaluo si es par
	if (numero%i==0)
	{
		console.log(i);
		contadorDivisores++;
	}
}
alert("Se encontraron "+contadorDivisores+" divisores.")
}//FIN DE LA FUNCIÓN