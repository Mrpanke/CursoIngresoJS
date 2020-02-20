function mostrar()
{

	var contadorNegativo = 0;
	var contadorPositivo = 0;
	var acumuladorPositivo = 0;
	var acumuladorNegativo = 0;
	var contadorCero = 0;
	var contadorPares = 0;
	var DiferenciaPosiNega;
	var promedioNegativos;
	var promedioPositivos;
	var numero;
	var resto;
	var respuesta;

	do{
		numero = parseInt(prompt('Ingrese un numero'));

		while(isNaN(numero)){

			numero = parseInt(prompt('El dato ingresado no es numero. Ingrese nuevamente'));
		}
		respuesta = prompt('Quiere seguir ingresando numero ?');
	}while(respuesta = 'si');

	if(numero > 0){
		resto = numero /2 ;
		if(resto == 0){
			contadorPares++;
		}
		acumuladorPositivo = acumuladorPositivo + numero;
		contadorPositivo++;

	}else if(numero < 0){
		resto = numero /2 ;
		if(resto == 0){
			contadorPares++;
		}

		acumuladorNegativo = acumuladorNegativo + numero;
		contadorNegativo++;

	}else{

		contadorCero++;
	}

	promedioPositivos = acumuladorPositivo / contadorPositivo;
	promedioNegativos = acumuladorNegativo / contadorNegativo;
	DiferenciaPosiNega = contadorPositivo - contadorNegativo;

	document.write('Suma de Positivos= ' + acumuladorPositivo);
	
}//FIN DE LA FUNCIÓN