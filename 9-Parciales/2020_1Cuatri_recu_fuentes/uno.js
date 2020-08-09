/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más caro de los jabones, la cantidad de unidades y el fabricante<br>
			b) Del tipo de producto con más unidades en total de la compra, el promedio por compra <br>
			c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
//declaro variables
let tipo;
let precio;
let cantidad;
let marca;
let fabricante;
let respuesta;
let cantidadAlcohol = 0;
let cantidadBarbijo = 0;
let cantidadJabon = 0;
let flagPrimerJabon = 0;
let precioMaxJabon;
let fabricanteMaxJabon;
let cantidadMaxJabon;
let tipoMaximo;
let cantidadMaxima;
let precioMaximo;
let precioAlcohol = 0;
let precioBarbijo = 0;
let precioJabon =0;
//armo bucle de carga de datos
do
{
	//cargo tipo
	tipo = prompt("Ingrese el tipo de producto (alcohol, barbijo o jabon");
		//valido tipo (barbijo jabon alcohol)
	while (!(tipo == "alcohol" || tipo == "barbijo" || tipo == "jabon"))
	{
		tipo = prompt ("El tipo de producto ingresado es invalido. Ingrese el tipo de producto (alcohol, barbijo o jabon)");
	}
	//cargo precio
	precio = parseFloat(prompt ("Ingrese el precio (entre $100 y $300"));
		//valido precio (entre 100 y 300)
	while (!(precio >= 100 && precio <= 300))
	{
		precio = parseFloat(prompt ("El precio del producto ingresado es invalido. Ingrese un precio valido entre $100 y $300)"));
	}
	//cargo cantidad de unidades
	cantidad = parseInt(prompt ("Ingrese cantidad de unidades. (tiene que ser mayor que cero y menor que 1000.)"));
		//valido cantidad de unidades ( >0 y <1000)
	while (!(cantidad > 0 && cantidad <1000))
	{
		cantidad = parseInt(prompt("La cantidad ingresada es invalida. Ingrese cantidad de unidades. (tiene que ser mayor que 0 y menor que 1000."));
	}
	//cargo marca
	marca = prompt("Ingrese marca.");
	//cargo fabricante
	fabricante = prompt("Ingrese fabricante.");
	//pregunto condicion de salida
	respuesta = prompt("Desea ingresar otro producto? 's' o 'n'.");
		//valido condicion de salida
	//armo switch para cargar acumuladores / contadores
	switch(tipo)
	{
		case "alcohol":
			cantidadAlcohol = cantidadAlcohol + cantidad; //necesario para b)
			precioAlcohol = precioAlcohol + precio;
			
		break;
		case "barbijo":
			cantidadBarbijo = cantidadBarbijo + cantidad; //necesario para b) 	//c) cantidad de barbijos comprados
			precioBarbijo = precioBarbijo + precio;
		break;
		case "jabon":
			cantidadJabon = cantidadJabon + cantidad; //necesario para b)
			precioJabon = precioJabon + precio;
			//a) cantidad de unidades y fabricante del maximo precio de jabones
			if (flagPrimerJabon == 0 || precio > precioMaxJabon)
			{
				flagPrimerJabon = 1;
				precioMaxJabon = precio;
				fabricanteMaxJabon = fabricante;
				cantidadMaxJabon = cantidad;
			}
		break;
	}
	while (!(respuesta == 's' || respuesta == 'n'))
	{
		respuesta = prompt ("La respuesta ingresada es invalida. Ingrese 's' para si o 'n' para no.");
	}
}while (respuesta =='s');
	//b) total de la compra y el promedio por compra de producto de cantidad maxima
	if (cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon)
	{
		tipoMaximo = "alcohol";
		cantidadMaxima = cantidadAlcohol;
		precioMaximo = precioAlcohol;
	}
	else if (cantidadBarbijo > cantidadAlcohol && cantidadBarbijo > cantidadJabon)
	{
		tipoMaximo = "barbijo";
		cantidadMaxima = cantidadBarbijo;
		precioMaximo = precioBarbijo;
	}
	else if (cantidadJabon > cantidadAlcohol && cantidadJabon > cantidadBarbijo)
	{
		tipoMaximo = "jabon";
		cantidadMaxima = cantidadJabon;
		precioMaximo = precioJabon;
	}
	// en total se necesitan cantidad, precio y fabricante
	//muestro los resultados por consola:
	
	//a) Del más caro de los jabones, la cantidad de unidades y el fabricantes
	if (cantidadJabon !=0 )
	{
		console.log("El mas caro de los jabones es el fabricado por "+fabricanteMaxJabon+" y vale $"+precioMaxJabon+"c/u. Se compraron "+cantidadMaxJabon+" unidades.");
	}
	else
	{
		console.log("No se compraron jabones.");
	}
	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	promedioMaxCompra = precioMaximo / cantidadMaxima;
	console.log("El producto con mas unidades en total en la compra es "+tipoMaximo+" y el promedio por compra es de $"+promedioMaxCompra);
	//c) Cuántas unidades de Barbijos se compraron en total
	console.log("Cantidad de barbijos comprados: "+cantidadBarbijo);

}	
