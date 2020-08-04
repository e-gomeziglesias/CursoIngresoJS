/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//Declaro variables
	let numero; //ingreso de usuario
	let negativo = 0;//acumulador suma negativos
	let positivo = 0;// acumulador suma positivos
	let iPos = 0; // contador positivos
	let iNeg = 0; // contador negativos
	let iCero = 0; // contador ceros
	let iPar = 0; // contador pares
	let promedioPos; // promedio de los positivos
	let promedioNeg; // promedio de los negativos
	let resta; // diferencia pos - neg
	let par; // 
	let respuesta; // variable de control
	//bucle para ingresar numeros
	do {
		numero = parseInt(prompt("Ingrese un numero."));
		if (numero < 0) //1.4.if numero negativo entonces sumo con contador negativo 
		{
			negativo = numero + negativo;
			iNeg++;
		}
		else if (numero > 0) //2.3 if numero positivo entonces sumo con contador positivos
		{
			positivo = numero + positivo;
			iPos++;
		}
		else //5. if cero entonces contador ceros
		{
			iCero++;
		}

		par = numero % 2;
		if (par == 0) //6 if numero % 2 = 0 etonces contador pares
		{
			iPar++;
		}

		respuesta = prompt("Desea ingresar otro numero? 's' o 'n'");
	} while (respuesta == 's'); 	//condicion para frenar ingreso de numeros

	if (iPos != 0) //7 suma positivos/conttador positivos siempre que se hayan ingresado positivos
	{
		promedioPos = positivo / iPos;
	}
	else {
		promedioPos = "No se ingresaron numeros positivos.";
	}
	if (iPos != 0) 	//8. suma negativos/contador negativos siempre que se hayan ingresado negativos
	{
		promedioNeg = negativo / iNeg;
	}
	else {
		promedioNeg = "No se ingresaron numeros negativos.";
	}

	resta = iPos - iNeg; 	//9. cant positivos - cant negativo

	document.write("1. La suma de los negativos es: " + negativo + "</br>"); //"</br>" es un cambio de linea en html
	document.write("2. La suma de los positivos es: " + positivo + "</br>");
	document.write("3. La cantidad de positivos ingresados es: " + iPos + "</br>");
	document.write("4. La cantidad de negativos ingresados es: " + iNeg + "</br>");
	document.write("5. La cantidad de ceros ingresados es: " + iCero + "</br>");
	document.write("6. La cantidad de numeros pares es: " + iPar + "</br>");
	document.write("7. El promedio de los numeros positivos ingresados es: " + promedioPos + "</br>");
	document.write("8. El promedio de los numeros negativos ingresados es: " + promedioNeg + "</br>");
	document.write("9. La diferencia de los numeros positivos y negativos es: " + resta + "</br>");

}//FIN DE LA FUNCIÓN