/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
// declaro variables
let numero;
let suma = 0; // acumulador
let promedio;
let i = 0; // contador de numeros ingresados
let respuesta; // variable de control

do
{
    numero = parseInt(prompt("Ingrese un numero."));
    suma = suma + numero; //sumo acumulando
    i++; //incremento contador de numeros ingresados
    respuesta = prompt("Desea ingresar otro numero? Escriba 's' o 'n'."); //validacion
} while(respuesta == 's') ;//va con comilla simple porque en C, 's' es char y "s" es string.

/*
//armo bucle ingreso de datos
while(respuesta == 's') //va con comilla simple porque en C, 's' es char y "s" es string.
{
    numero = parseInt(prompt("Ingrese un numero."));
    suma = suma + numero; //sumo acumulando
    i++; //incremento contador de numeros ingresados
    respuesta = prompt("Desea ingresar otro numero? Escriba 's' o 'n'."); //validacion
}
*/
promedio = suma / i;
document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio.toFixed(2);


}//FIN DE LA FUNCIÓN'