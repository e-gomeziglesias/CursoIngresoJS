function mostrar()
{
//declaro variables

let numero;
//pido numero en bucle
for(let i=0; !(numero==9) ; i++)
{
	numero = parseInt(prompt("Ingrese numero."));
	if (numero == 9)
	{
		continue;
	}
	console.log(numero);
	//si el numero ingresado es 9, salir
}
	
}//FIN DE LA FUNCIÓN