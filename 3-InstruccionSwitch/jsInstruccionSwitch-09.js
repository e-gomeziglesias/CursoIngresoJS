function mostrar()
{
//declaro variables
let destino;
let precioBase = 15000;
let descuento;
let aumento;
let precioFinal;

// Inicializo descuento y aumento
descuento =0 ;
aumento = 0 ;
//asigno el valor del cuadro de texto a la variable destino
destino = document.getElementById("txtIdDestino").value;
estacion = document.getElementById("txtIdEstacion").value;
//planteo el switch anidado
switch(destino)
{
	case "Bariloche":
		switch(estacion)
		{
			case "Verano":
			  descuento = 20/100;
			  break;
			  
			case "Invierno":
			  aumento = 20/100;
			  break;
			  
			case "Otoño":
			case "Primavera":
			  aumento = 10/100;
		}
	break;
	case "Cataratas":
		switch(estacion)
		{
			case "Verano":
			  aumento = 10/100;
			  break;
			case "Invierno":
			  descuento = 10/100;
			  break;
			case "Otoño":
			case "Primavera":
			  aumento = 10/100;
			  break;
		}
	break;
	case "Mar del plata":
		switch(estacion)
		{
			case "Verano":
			  aumento = 20/100;
			  break;
			case "Invierno":
			  descuento = 20/100;
			  break;
			case "Otoño":
			case "Primavera":
			  aumento = 10/100;
			  break;
		}
	break;
	case "Cordoba":
		switch(estacion)
		{
			case "Verano":
			  aumento = 10/100;
			  break;
			case "Invierno":
			  descuento = 10/100;
			  break;
		}
	break;
}
//calculo el precio final

precioFinal = precioBase + precioBase*aumento - precioBase*descuento;
alert("El precio final de su viaje es de $"+precioFinal);

}//FIN DE LA FUNCIÓN
