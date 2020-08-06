function mostrar()
{
//declaro variables
let numero;
let contadorDivisores = 0;

// cargo el valor en la variable

numero = parseInt(prompt("Ingese un numero: "));

// armo el bucle for
for (let i=1; i <= numero; i++) // i=1 pues parto del 1
{
    if (numero % i == 0)
    {
        contadorDivisores ++;
    }
}
if (contadorDivisores == 2) // si es primo tiene dos divisores (1 y si mismo)
{
    alert (numero + " es primo.");
}
else
{
    alert(numero + " no es primo.");
}
}//FIN DE LA FUNCIÓN