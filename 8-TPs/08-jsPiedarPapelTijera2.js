let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar() //esta funcion elije la seleccion de la maquina
{
	eleccionMaquina=Math.round(Math.random()*(3-1)+1);

}//FIN DE LA FUNCIÓN
function piedra()
{
    if (eleccionMaquina ==1)
    {
		alert("Empate!");
		ContadorDeEmpates++;
    }
    else if (eleccionMaquina == 2)
    {
		alert("Ganaste!");
		ContadorDeGanadas++;
    }
    else
    {
		alert("Perdiste.");
		ContadorDePerdidas++;
		document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
		document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
		document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
    }
	eleccionMaquina=Math.round(Math.random()*(3-1)+1);
	
}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina==2)
    {
		alert("Empate!");
		ContadorDeEmpates++;
    }
    else if (eleccionMaquina==3)
    {
		alert("Ganaste!");
		ContadorDeGanadas++;
    }
    else
    {
		alert("Perdiste.");
		ContadorDePerdidas++;
    }
	eleccionMaquina=Math.round(Math.random()*(3-1)+1);
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;

}//FIN DE LA FUNCIÓN
function tijera()
{
    if (eleccionMaquina==3)
    {
		alert("Empate!");
		ContadorDeEmpates++;
    }
    else if (eleccionMaquina==2)
    {
		alert("Ganaste!");
		ContadorDeGanadas++;
    }
    else
    {
		alert("Perdiste.");
		ContadorDePerdidas++;
    }
	eleccionMaquina=Math.round(Math.random()*(3-1)+1);
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
}//FIN DE LA FUNCIÓN  

function mostrarResultado()
{


}