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
 	let codMarca;
 	let IIBB;//declaro constante number
<<<<<<< HEAD
 	let precioUnitario = 35;//declaro constante number

	descuento = 0; //inicializo descuento
 	
 	//cargo los datos ingresados por el cuadro de texto
=======
 	let precioUnitario = parseFloat(35);//declaro constante number
 	descuento = parseFloat (1); //inicializo en number descuento
 	
 	//cargo los datos ingresados por el cuadro de texto
 	
 	cantidad = document.getElementById("txtIdCtxtIdCantidad").value; 
 	marca = document.getElementById("Marca").value;
 	if (marca = "ArgentinaLuz") //condición para asignar número a la marca
 	{
 	  codMarca=1; //argentinaluz
 	}
 	else if (marca = "FelipeLamparas")
 	{
 	  codMarca = 2; //felipelamparas
 	}
 	else 
 	{
 	  codMarca= 3;//todas las demás marcas
 	}
 	//descuento mas de 6 unidades
 	if (cantidad >= 6)
 	{
 	  descuento = 50/100;
 	}
 	else
 	{
	switch (codMarca) 
	{
 	  case 1: //casos argentinaLuz
 	    {
 	      if (cantidad = 5 )
 	      {
 	        descuento = descuento + 40/100;
 	      }
 	      else if (cantidad = 4)
 	      {
 	        descuento = descuento + 25/100;
 	      }
 	      else if (cantidad = 3)
 	      {
 	        descuento = descuento + 15/100;
 	      }
 	    }
 	    break;
 	  case 2: //casos FelipeLamparas
 	    {
 	      if (cantidad = 4)
 	      {
 	        descuento = descuento + 25/100;
 	      }
 	      else if (cantidad = 3)
 	      {
 	        descuento = descuento + 10/100;
 	      }
 	    }
 	    break;
 	  case 3: //casos todas las otras marcas
 	    {
 	      if (cantidad = 5)
 	      {
 	        descuento = descuento + 30/100;
 	      }
 	      else if (cantidad = 4)
 	      {
 	        descuento = descuento + 20/100;
 	      }
 	      else if (cantidad = 3)
 	      {
 	        descuento = descuento + 5/100;
 	      }
 	       
 	    }
 	    break;
 	}
 	}
 	precio= cantidad * precioUnitario;
 	precioFinal = precio - precio * descuento;
 	//condición IIBB
 	if (precioFinal > 120)
 	{
 	  IIBB = precioFinal*10/100;
 	}
>>>>>>> c306b825b825ca3aa49b3313169a70aacfe230c1
 	
 	cantidad = document.getElementById("txtIdCantidad").value; 
	 marca = document.getElementById("Marca").value;
	 
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
 	precio= cantidad * precioUnitario;
	precioFinal = precio - precio * descuento;
 	//condición IIBB
 	if (precioFinal > 120)
 	{
		IIBB = precioFinal*10/100;
		precioFinal=precioFinal + IIBB;
		document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
		alert("Usted pago "+IIBB.toFixed(2)+" de Ingresos Brutos.");
 	}
	 else
	{
		document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
	}
}
