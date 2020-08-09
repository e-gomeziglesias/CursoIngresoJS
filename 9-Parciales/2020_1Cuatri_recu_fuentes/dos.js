/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
    Tipo validad("arena";"cal";"cemento") 
    Cantidad de bolsas,
    Precio por bolsa (más de cero ),
    al terminar la compra el cliente accede a un descuento segun las bolsas en total
    Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
   Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
    a)
    El importe total a pagar , bruto sin descuento y...
    b)
    el importe total a pagar con descuento(solo si corresponde)
    d)
    Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
    f)
    El tipo mas caro*/
function mostrar()
{
//declaro variables. cantidad y precio estan inicializados en 0 por si el usuario llegara a no ingresar ese tipo de prodcuto
let tipo;
let cantidad;
let precio;
let cantidadArena=0;
let cantidadCal=0;
let cantidadCemento=0;
let precioArena=0;
let precioCal=0;
let precioCemento=0;
let cantidadTotalBolsas;
let precioBruto;
let descuento;
let precioNeto;
let tipoMax;
let cantidadMax;
let tipoCaro;
let precioCaro;
let flagPrimerProducto = 0;
//armo bucle para carga de datos (do-while)
do
{
  //cargo tipo
  tipo = prompt("Ingrese el tipo de producto. (arena, cal, cemento).");
  //valido tipo
  while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento" ))
  {
    tipo = prompt("El tipo ingresado es invalido. Ingrese el tipo de producto (arena, cal, cemento).");
  }
  //cargo cantidad
  cantidad = parseInt(prompt("Ingrese cantidad de bolsas."));
  //cargo precio
  precio = parseFloat(prompt("Ingrese el precio. Debe ser mayor a 0."));
  //valido precio (>0)
  while (!(precio > 0))
  {
    precio = parseFloat(prompt("El precio ingresado es invalido. Ingrese el precio. Debe ser mayor a 0."));
  }
  //Acumuladores para conocer el estado de cada tipo de producto.
  switch (tipo)
  {
    case"arena":
      cantidadArena = cantidadArena + cantidad;
      precioArena = precioArena + precio;
    break;
    case"cal":
      cantidadCal = cantidadCal + cantidad;
      precioCal = precioCal + precio;
    break;
    case"cemento":
      cantidadCemento = cantidadCemento + cantidad;
      precioCemento = precioCemento + precio;
    break;
  }
    //f) Determino el tipo mas caro
  if (flagPrimerProducto == 0 || precio > precioCaro)
  {
    tipoCaro = tipo;
    precioCaro = precio;
    flagPrimerProducto = 1;
  }
  //condicion de salida de do-while
  respuesta = prompt("Desea ingresar otro producto? 's' o 'n'.");
  //valido condicion de salida del do-while
  while (!(respuesta == 's' || respuesta == 'n'))
  {
    respuesta = prompt("La respuesta ingresada es invalida. Desea ingresar otro producto? 's' o 'n'.");
  }
}while (respuesta == 's');

/*al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.*/
cantidadTotalBolsas = cantidadArena + cantidadCal + cantidadCemento;
//aplicara descuento solo si corresponde, por como esta definida la variable descuento:
if (cantidadTotalBolsas > 10 && cantidadTotalBolsas < 30)
{
  descuento = 15;
}
else if (cantidadTotalBolsas >=30)
{
  descuento = 25;
}
else
{
  descuento = 0;
}
//a) Determino el importe total a pagar , bruto sin descuento
precioBruto = precioArena + precioCal + precioCemento;
precioNeto = precioBruto - precioBruto*descuento/100; 
//d) Determino el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
if (cantidadArena > cantidadCal && cantidadArena > cantidadCal)
{
  tipoMax = "arena";
  cantidadMax = cantidadArena;
}	
else if (cantidadCal > cantidadArena && cantidadCal > cantidadCemento)
{
  tipoMax = "cal";
  cantidadMax = cantidadCal;
}
else if (cantidadCemento > cantidadArena && cantidadCemento > cantidadCal)
{
  tipoMax = "cemento";
  cantidadMax = cantidadArena;
}

//a)
console.log("El precio bruto es de $"+precioBruto);
//b) Muestro el importe total a pagar con descuento(solo si corresponde)
if (descuento !=0)
{
  console.log("Se aplica un descuento del "+descuento+"%. El precio neto es de $"+precioNeto);
}
else
{
  console.log("No se aplicaron descuentos. El precio neto es de $"+precioNeto);
}
//d)
console.log("El producto con mas cantidad de bolsas compradas (" +cantidadMax+" bolsas) es "+tipoMax);
//f)
console.log("El producto mas caro ($"+precioCaro+" c/u) es "+tipoCaro);
}
