/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //declaro variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    //los precios ingresan por la caja de texto. hay que guardarlos en formato number en la variable
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    //calculo la suma
    suma = precio1 + precio2 + precio3;
    alert ("La suma es $" + suma);

}
function Promedio () 
{
    //declaro variables
    let precio1;
    let precio2;
    let precio3;
    let promedio;
    //los precios ingresan por la caja de texto. hay que guardarlos en formato number en la variable
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    //calculo el promedio
    promedio = (precio1 + precio2 + precio3) / 3;
    promedio = promedio.toFixed(2);
    alert ("El promedio es $" + promedio);
}
function PrecioFinal () 
{
    //declaro variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let precioFinal;
    //los precios ingresan por la caja de texto. hay que guardarlos en formato number en la variable
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    //calculo la suma
    suma = precio1 + precio2 + precio3;
    //calculo IVA
    iva = suma * 21/100;
    //calculo precioFinal
    precioFinal = suma + iva;
    precioFinal = precioFinal.toFixed(2);
    alert ("El precio final es $" + precioFinal);	
}