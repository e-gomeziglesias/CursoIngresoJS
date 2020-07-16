/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //declaro las variables
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    // los datos entran por caja de texto. los guardo en la variable como number
    largo = parseFloat (document.getElementById("txtIdLargo").value);
    ancho = parseFloat (document.getElementById("txtIdAncho").value);
    // calculo el perimetro del rectangulo
    perimetro = 2*(largo + ancho);
    alambre = 3*perimetro;
    alambre = alambre.toFixed(2);
    alert("Se necesitan " + alambre + " metros de alambre.");
}
function Circulo () 
{
    //declaro las variables
    let radio;
    let perimetro;
    let alambre;

    // los datos entran por caja de texto. los guardo en la variable como number
    radio = parseFloat (document.getElementById("txtIdRadio").value);
    // calculo el perimetro del circulo
    perimetro = 2* Math.PI * radio;
    alambre = 3*perimetro;
    alambre = alambre.toFixed(2);
    alert("Se necesitan " + alambre + " metros de alambre.");
}
function Materiales () 
{
	    //declaro las variables
        let largo;
        let ancho;
        let area;
        let cemento;
        let cal;
    
        // los datos entran por caja de texto. los guardo en la variable como number
        largo = parseFloat (document.getElementById("txtIdLargo").value);
        ancho = parseFloat (document.getElementById("txtIdAncho").value);
        // calculo el area del terreno
        area = largo * ancho;
        //calculo la cantidad de cemento por m2
        cemento = 2*area;
        cemento = Math.ceil(cemento); //redondeo porque son bolsas discretas
        //calculo la cantidad de cal por m2
        cal = 3*area;
        cal = Math.ceil(cal); //redondeo porque son bolsas discretas
        alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");
}