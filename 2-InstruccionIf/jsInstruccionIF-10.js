function mostrar()
{
//Declaro variables

let nota;
let maximo=10;
let minimo=1;
//nota = ; //asigno el valor aleatorio de nota
nota = Math.round(Math.random()*(maximo-minimo)+minimo);
//Armo la condición

if (nota >= 9)
{
  
  alert("Nota: "+nota+" EXCELENTE");
}
else if (nota < 4)
{
  alert("Nota: "+nota+" Vamos, la próxima se puede.");
}
else
{
  alert("Nota: "+nota+" APROBÓ");
}
}//FIN DE LA FUNCIÓN