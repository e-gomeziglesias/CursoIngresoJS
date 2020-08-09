
function mostrar()
{
//declaro variables
let tipo;
let precio;
let cantidad;
let marca;
let fabricante;
let cantidadAlcohol=0;
let cantidadJabon=0;
let cantidadBarbijo=0;
let contadorAlcohol=0;
let contadorJabon=0;
let contadorBarbijo=0;
//inicializo los baratos por si no se llegaran a ingresar alcoholes
let cantidadAlcoholBarato=0;
let precioAlcoholBarato = 0;
let fabricanteAlcoholBarato = "No disponible";
let promedioMax;
let tipoMax;
let cantidadMax;
let flagAlcohol = 0;
let precioAlcohol = 0;
let precioBarbijo = 0;
let precioJabon = 0;

//comienzo la carga de datos
for (let i = 1 ; i <= 5; i++)
{
    //tipo
    tipo = prompt("Ingrese el tipo de producto. (barbijo, jabón o alcohol");
        //valido tipo (barbijo, jabon o alcohol)
    while (!(tipo == "barbijo" || tipo == "jabón" || tipo == "alcohol"))
    {
        tipo = prompt("El tipo de producto es inválido. Ingrese el tipo de producto. (barbijo, jabón o alcohol)");
    }
    //precio
    precio = parseInt(prompt ("Ingrese el precio del producto."));
        //valido precio (entre 100 y 300)
    while (!(precio >= 100 && precio <=300))
    {
        precio = parseInt(prompt ("El precio ingresado es inválido. Ingrese el precio del producto válido, entre 100 y 300."));
    }
    //cantidad
    cantidad = parseInt(prompt ("Ingrese la cantidad del producto."));
        //valido cantidad (> 0 y < 1000)
    while (!(cantidad > 0 && cantidad < 1000 ))
    {
        cantidad = parseInt(prompt ("La cantidad ingresada es invalida. Ingrese la cantidad del producto entre 1 y 999."));
	}
    //marca
    marca = prompt ("Ingrese la marca.");
    //fabricante
	fabricante = prompt ("Ingrese el fabricante")
	switch (tipo)
	{
		case "alcohol":
			//contadorAlcohol++;
			precioAlcohol = precioAlcohol + precio;
			cantidadAlcohol = cantidadAlcohol + cantidad;

			//A. si alcohol y precio minimo entonces contar cantidad y fabricante
			if (flagAlcohol == 0 || precio < precioAlcoholBarato)
			{
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
				flagAlcohol = 1;
			}
		break;
		case "barbijo":
			//contadorBarbijo++;
			precioBarbijo = precioBarbijo + precio;
			cantidadBarbijo = cantidadBarbijo + cantidad;
		break;
		case "jabón":
			//contadorJabon++;
			precioJabon = precioJabon + precio;
			cantidadJabon = cantidadJabon + cantidad;
		break;
	}

	//C. si jabon entonces contar cantidad
}
	//B. si cantidad por tipo es maxima entonces promedio por compra (precio/cantidad de maximos)
	if (cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon)
	{
		cantidadMax = cantidadAlcohol;
		precioMax = precioAlcohol;
		tipoMax = "alcohol";
	}
	else if (cantidadBarbijo > cantidadAlcohol && cantidadBarbijo > cantidadJabon)
	{
		cantidadMax = cantidadBarbijo;
		precioMax = precioBarbijo;
		tipoMax = "barbijo";
	}
	else //(cantidadJabon > cantidadAlcohol && cantidadJabon > cantidadBarbijo) no pongo esta condicion porque estoy asumiendo que no habra valores iguales de antidades
	{
		cantidadMax = cantidadJabon;
		precioMax = precioJabon;
		tipoMax = "jabón"
	}
	promedioMax = precioMax/cantidadMax;

//Muestro los datos

console.log("A. El alcohol mas barato es de "+fabricanteAlcoholBarato+" y se compraron "+cantidadAlcoholBarato+" unidades.");
console.log("B. El producto que mas se compro fue "+tipoMax+" a un precio promedio de $"+promedioMax.toFixed(2));
console.log("C. Cantidad de jabones: "+cantidadJabon);
}

