function mostrar()
{
//Declaro variables

let numero;
let contador = 1;
let suma=0;
let promedio;

//Planteo bucle de ingreso de datos
while(contador <= 5)
{
	
	numero = parseInt(prompt("Ingrese el "+contador+"° numero."));
	contador++;
	suma = suma + numero; //calculo la suma
}

//calculo el promedio
promedio = suma / (contador - 1);
document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN