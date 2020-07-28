/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina; //declaro la variable 
/*Defino que 1=piedra, 2=papel, 3=tijera*/

function comenzar() //esta funcion elije la seleccion de la maquina
{
	eleccionMaquina=Math.round(Math.random()*(3-1)+1);

}//FIN DE LA FUNCIÓN
function piedra()
{
    if (eleccionMaquina ==1)
    {
        alert("Empate!");
    }
    else if (eleccionMaquina == 2)
    {
        alert("Ganaste!");
    }
    else
    {
        alert("Perdiste.");
    }
    eleccionMaquina=Math.round(Math.random()*(3-1)+1);
}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina==2)
    {
        alert("Empate!");
    }
    else if (eleccionMaquina==3)
    {
        alert("Ganaste!");
    }
    else
    {
        alert("Perdiste.");
    }
    eleccionMaquina=Math.round(Math.random()*(3-1)+1);

}//FIN DE LA FUNCIÓN
function tijera()
{
    if (eleccionMaquina==3)
    {
        alert("Empate!");
    }
    else if (eleccionMaquina==2)
    {
        alert("Ganaste!");
    }
    else
    {
        alert("Perdiste.");
    }
    eleccionMaquina=Math.round(Math.random()*(3-1)+1);
}//FIN DE LA FUNCIÓN  