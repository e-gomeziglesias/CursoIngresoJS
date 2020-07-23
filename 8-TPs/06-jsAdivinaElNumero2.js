/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/


/*en este ejercicio, las variables quedaran declaradas en el scope global porque sino no va va funcionar.
 Se necesita que ambas funciones tengan acceso a modificar ambas variables*/

//HAY QUE INICIALIZAR LAS VARIABLES CUANDO LA PRIMERA VEZ QUE LA USE SEA PARA LEERLA
let numeroSecreto; 
let contadorIntentos;
let flag = 0; //le asignamos un valor inicial, una "posicion inicial".
function comenzar() //esta funcion es la que modifica el valor de flag. Es el "cartero"
{
	//Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.round(Math.random()*99+1);
    alert(numeroSecreto);
		flag = 1; //el cartero levanta la bandeera
    contadorIntentos = 0;
    document.getElementById("txtIdIntentos").value=contadorIntentos;


}
/*Patron: es una solucion que ya se le
ocurrio a alguien para determinado problema*/

/*un caso de patron comun es saber si alguien presiono
el boton de verificar, es decir, necesito saber
si se ejecuto o no un bloque de codigo*/

/*Variable Bandera: (variable Flag):
funciona como la bandera de un buzon de correo*/
function verificar()
{
  if(flag==0)//este if mirara la flag. Si esta como cuando el programa comenzo, debe mostrar el mensaje
  {
  //alert debe ir dentro de un condicional, ya que se ejecuta a veces
	alert("Primero debes presionar el boton comenzar.");
  }
  else
  {
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value=contadorIntentos;
    //solo la funcion verificar necesita tener info del numero ingresado por el usuario. no necesito que sea global
let numero;
// cargo datos del textbox
numero=parseInt(document.getElementById("txtIdNumero").value);
    //cuando el jugador acierta, debe bloquearse la verificacion.
    //armo el if else if del resultado de la comparacion
    if(numeroSecreto==numero)
    {
	  switch(contadorIntentos)
	  {
		  case 1:
			  alert("Usted es un psiquico!!!");
			  break;
		  case 2:
			  alert("Excelente percepcion");
			  break;
		  case 3:
			  alert("Esto es suerte");
			  break;
		  case 4:
			  alert("Excelente tecnica");
			  break;
		  case 5:
			  alert("Usted esta en la media");
			  break;
		  case 6:
		  case 7:
		  case 8:
		  case 9: 
		  case 10:
			  alert("Falta tecnica.");
			  break;
		  default:
			  alert("Afortunado en el amor!");
			  break;
	  }
      flag = 0;
      contadorIntentos=0;
    } 
    else if(numeroSecreto < numero )
    {
      alert("Se paso...");
    }
    else
    {
      alert("Falta...");
    }
    document.getElementById("txtIdNumero").value="";//limpio el valor de la caja
    document.getElementById("txtIdNumero").focus();//deja el cursor en la caja lista para editar
  }

}