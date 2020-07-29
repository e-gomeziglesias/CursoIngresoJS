function mostrar()
{
//Declaro variables

let numero;
let i = 0; //la variable i es un contador                                        
let suma=0; //la variable suma es un acumulador
let promedio;
/*
//planteo el ingreso de datos

i++;
numero = parseInt(prompt("Ingrese el "+i+"° numero."));
i++;
numero = numero + parseInt(prompt("Ingrese el "+i+"° numero."));
i++;
numero = numero + parseInt(prompt("Ingrese el "+i+"° numero."));
i++;
numero = numero + parseInt(prompt("Ingrese el "+i+"° numero."));
i++;
numero = numero + parseInt(prompt("Ingrese el "+i+"° numero."));

document.getElementById("txtIdSuma").value = numero;
promedio = numero / i;
document.getElementById("txtIdPromedio").value = promedio;
*/
//Planteo bucle de ingreso de datos
while(i < 5)
{
	i++;
	numero = parseInt(prompt("Ingrese el "+i+"° numero."));
	suma = suma + numero; //calculo la suma
}

//calculo el promedio
promedio = suma / i;
document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN