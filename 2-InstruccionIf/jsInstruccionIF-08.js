function mostrar()
{
//declaración de variables
let estadoCivil;
let edad;
//tomo los datos por cuadro de texto

edad=parseInt(document.getElementById("txtIdEdad").value);
estadoCivil=document.getElementById("estadoCivil");

//armo las condiciones

if(edad>=18 && estadoCivil != "Soltero")
//if (!(edad<18 || estadoCivil !="Soltero");)
{
  alert("Es soltero y no es menor");
}
}//FIN DE LA FUNCIÓN