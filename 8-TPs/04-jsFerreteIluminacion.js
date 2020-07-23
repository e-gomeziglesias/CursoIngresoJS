/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//declaro variables
 	let cantidad;
 	let descuento;
 	let precio;
 	let precioFinal;
	let marca;
	let iibb;
	const PRECIOUNITARIO = 35;

	//cargo los datos de los cuadros de texto en las variables. Inicializo descuento.
 	cantidad = document.getElementById("txtIdCantidad").value; 
	marca = document.getElementById("Marca").value;
	descuento = 0;

	if (cantidad >= 6)
	{
		descuento = 50/100;
	}
	else
	{
	switch (marca) 
	{
 	  case "ArgentinaLuz": //casos argentinaLuz
 	      if (cantidad == 5 )
 	      {
 	        descuento = descuento + 40/100;
 	      }
 	      else if (cantidad == 4)
 	      {
 	        descuento = descuento + 25/100;
 	      }
 	      else if (cantidad == 3)
 	      {
 	        descuento = descuento + 15/100;
 	      }
 	    break;
 	  case "FelipeLamparas": //casos FelipeLamparas
 	      if (cantidad == 4)
 	      {
 	        descuento = descuento + 25/100;
 	      }
 	      else if (cantidad == 3)
 	      {
 	        descuento = descuento + 10/100;
 	      }
 	    break;
 	  default: //casos todas las otras marcas
 	      if (cantidad == 5)
 	      {
 	        descuento = descuento + 30/100;
 	      }
 	      else if (cantidad == 4)
 	      {
 	        descuento = descuento + 20/100;
 	      }
 	      else if (cantidad == 3)
 	      {
 	        descuento = descuento + 5/100;
 	      }
 	       
 	    break;
	 }
	}
 	precio= cantidad * PRECIOUNITARIO;
	 ;
	precioFinal = precio - precio * descuento;
 	//condición IIBB
 	if (precioFinal > 120)
 	{
		iibb = precioFinal*10/100;
		
		document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
		precioFinal=precioFinal + iibb;
		alert("El importe final es de " +precioFinal+ ". Usted pago "+iibb.toFixed(2)+" de Ingresos Brutos.");
 	}
	 else
	{
		document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
	}
}
