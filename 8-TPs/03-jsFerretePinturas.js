/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //declaro las variables
    let F;
    let C;
    //el dato ingresa por caja. lo tengo que guardar en la variable F
    F = parseFloat(document.getElementById("txtIdTemperatura").value);
    //hago la conversion de F a C
    C= (F - 32) * 5/9;
    C=C.toFixed(2); //redondeo a dos decimales
    //muestro el resultado concatenado
    alert (F+"F son " +C+ "C");
}   


function CentigradosFahrenheit () 
{
    //declaro las variables
    let F;
    let C;
    //el dato ingresa por caja. lo tengo que guardar en la variable F
    C = parseFloat(document.getElementById("txtIdTemperatura").value);
    //hago la conversion de F a C
    F= C * 9/5 + 32;
    F= F.toFixed(2); // redondeo a dos decimales
    //muestro el resultado concatenado
    alert (+C+"C son " + F + "F");	
}
