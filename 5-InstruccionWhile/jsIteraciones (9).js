function mostrar()
{

	var flag = 0;
	var respuesta;
	var numero;
	var maximo;
	var minimo;
	
	do{
		numero = parseInt(prompt('Ingrese un numero'));

		while(isNaN(numero)){

			numero = parseInt(prompt('lo ingresado no es un numero. Intentelo nuevamente'));
		}
		if(flag == 0 ||maximo < numero){

			maximo = numero;
		}
		if(minimo > numero){

			minimo = numero;
			flag = 1;
		}

		respuesta = prompt('Quiere seguir ingresando numero ?');
	}while(respuesta == 'si')

	document.getElementById('minimo').value = minimo;
	document.getElementById('maximo').value = maximo;


}