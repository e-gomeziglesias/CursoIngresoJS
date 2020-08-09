/*Enunciado:
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m"), 
estado civil("soltero", "casado" o "viudo") y temperatura corporal. 
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
//declaro variables
let nombre;
let nacionalidad;
let edad;
let sexo;
let estadoCivil;
let temperatura;
let flagPrimerPasajero = 0;
let temperaturaMax;
let nacionalidadTemperaturaMax;
let contadorMayoresSolteros = 0;
let contadorMujeresSolteras = 0;
let contadorMujeresViudas = 0;
let contadorTerceraEdadTemperaturaAlta = 0;
let contadorMujeresCasadas = 0;
let edadMujeresCasadas = 0;
let promedioEdadMujeresCasadas; 
//cargo datos por prompt en bucle do while
do 
{
	//nombre
	nombre = prompt("Ingrese nombre del pasajero.");
	//nacionalidad
	nacionalidad = prompt("Ingrese la nacioalidad.");
	//edad
	edad = parseInt(prompt("Ingrese edad."));
	//sexo
	sexo = prompt("Ingrese sexo ('f' o 'm').");
	//valido sexo (f - m)
	while (!(sexo=='f' || sexo =='m'))
	{
		sexo = prompt("El sexo ingresado es invalido. Ingrese sexo ('f' para femenino - 'm' para masculino");
	}
	//estado civil
	estadoCivil = prompt("Ingrese el estado civil. (soltero - casado - viudo)");
	//valido estado civil ( soltero - casado - viudo)
	while (!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
	{
		estadoCivil = prompt("El estado civil ingresado es incorrecto. Ingrese el estado civil. (soltero - casado - viudo)");
	}
	//temperatura
	temperatura = prompt("Ingrese la temperatura.");
	//a) la Nacionalidad de la persona con mas temperatura.
	if (flagPrimerPasajero == 0 || temperatura > temperaturaMax)
	{
		temperaturaMax = temperatura;
		nacionalidadTemperaturaMax = nacionalidad;
		flagPrimerPasajero = 1;
	}
	//b) Cuantos mayores de edad( más de 17) estan solteros
	if (edad > 17 && estadoCivil == "soltero")
	{
		contadorMayoresSolteros++;
	}
	//c) La cantidad de Mujeres que hay solteras o viudas.
	if (sexo == 'f')
	{
		switch (estadoCivil)
		{
			case "casado": //e) datos que necesito para promedio de edad entre las mujeres casadas.
				contadorMujeresCasadas++;
				edadMujeresCasadas = edadMujeresCasadas + edad;
			case "soltero":
				contadorMujeresSolteras++;
			break;
			case "viudo":
				contadorMujeresViudas++;
			break;
		}
	}
	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	if (edad > 60 && temperatura > 38)
	{
		contadorTerceraEdadTemperaturaAlta++;
	}
	//condicion de salida do while
	respuesta = prompt("Desea ingresar los datos de otro pasajero? 's' o 'n'");
	//valido condicion de salida do while
	while (!(respuesta == 's' || respuesta == 'n'))
	{
		respuesta = prompt("La respuesta ingresada es invalida.Desea ingresar los datos de otro pasajero? 's' o 'n'");
	}
} while(respuesta == 's');
//promedio de mujeres casadas

//a) la Nacionalidad de la persona con mas temperatura.
console.log("La persona con mayor temperatura ("+temperaturaMax+"C) es de "+nacionalidadTemperaturaMax);
//b) Cuantos mayores de edad( más de 17) estan solteros
console.log("Hay "+contadorMayoresSolteros+" mayores de edad solteros.");
//c) La cantidad de Mujeres que hay solteras o viudas.
console.log("Hay "+contadorMujeresSolteras+" mujeres solteras y "+contadorMujeresViudas+" mujeres viudas.");
//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
console.log("De la tercera edad, hay "+contadorTerceraEdadTemperaturaAlta+" personas con temperatura superior a 38 grados.");
//e) El promedio de edad entre las mujeres casadas.
if (contadorMujeresCasadas != 0 )
{
	promedioEdadMujeresCasadas = edadMujeresCasadas/contadorMujeresCasadas;
	console.log("El promedio de edad entre las mujeres casadas es de "+promedioEdadMujeresCasadas);
}
else
{
	console.log("No se ingresaron datos de mujeres casadas.");
}
}
