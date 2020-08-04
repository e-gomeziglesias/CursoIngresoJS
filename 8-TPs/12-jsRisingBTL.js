/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
//Declaro vsriables
let edad;
let sexo;
let estadoCivil;
let sueldo;
let legajo;
let nacionalidad;
//Cargo Edad
edad = prompt("Ingrese su edad, en números. (entre 18 a 90 años");
//valido Edad entre 18 y 90 inclusive
while (!(edad >= 18 && edad <= 90)) //me estoy asegurando que tampoco ingrese letras
{
  edad = prompt("La edad ingresada es inválida. Ingrwse su edad usando números, entre 18 y 90.");
}
//Cargo Sexo
sexo = toUpperCase(prompt("Ingrese su sexo. 'F' para femenino, 'M' para masculino."));
  //valido Sexo "M" o "F"
  while (!(sexo == 'M' || sexo == 'F'))
  {
    sexo = prompt("El sexo ingresado es inválido. Ingrese 'F' para femenino o 'M' para masculino.");
  }
//cargo estado civil
estadoCivil = parseInt(prompt ("Ingrese número de estado civil. 1 Soltero - 2 Casado - 3 Divorciado - 4 Viudo."));
  //valido estado civil entre 1 y 4
  while (!(estadoCivil == 1 || estadoCivil == 2 || estadoCivil == 3 || estadoCivil ==4))
  {
    estadoCivil = parseInt(prompt ("El estado civil ingresado es inválido. Ingrese número de estado civil. 1 Soltero - 2 Casado - 3 Divorciado - 4 Viudo."));
  }
//cargo Sueldo
sueldo = parseInt (prompt ("Ingrese sueldo bruto. Debe ser mayor a $8000."));
  //valido Sueldo mayor a 8000
  while (!(sueldo >= 8000))
  {
sueldo = parseInt (prompt ("El sueldo ingresado es inválido. Ingrese sueldo bruto en números. Debe ser mayor a $8000."));
  }
//cargo legajo
legajo = parseInt(prompt("Ingrese el número de 4 cifras de su legajo"));
  //valido legajo numerico de 4 cifras (1000 a 9999)
  while (!(legajo >= 1000 && legajo <= 9999))
  {
    legajo = parseInt(prompt("El número de legajo ingresado es inválido. Ingrese el número de 4 cifras de su legajo"))
  }
//cargo nacionalidad
nacionalidad = toUpperCase(prompt ("Ingrese el estado de su nacionalidad. 'A' para argentinos - 'E' para extranjeros - 'N' para nacionalizados"));
  //valido nacionalidad (A E N)
  while (!(nacionalidad == 'A' || nacionalidad == 'E' || nacionalidad == 'N'));
  {
    nacionalidad = toUpperCase(prompt ("El estado de su nacionalidad es inválido. Ingrese el estado de su nacionalidad. 'A' para argentinos - 'E' para extranjeros - 'N' para nacionalizados"));
  }
//muestro los datos por cuadro de texto.
= edad;
= sexo;
switch(estadoCivil)
{
  case 1:
    = "Casado";
  break;
  case 2:
    = "Soltero";
  break;
  case 3:
    = "Divorciado";
  break;
  case 4:
    ="Viudo";
  break;
}
= "$" + sueldo;
= legajo;
switch(nacionalidad)
{
  case 'A':
    = "Argentino";
  break;
  case 'E':
    = "Extranjero";
  break;
  case 'N':
    = "Nacionalizado";
  break;

}
}