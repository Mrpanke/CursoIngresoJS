function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var flag = 0;
	var respuesta;


do{
	numero = parseInt(prompt('Ingrese el numero'));

	while(isNaN(numero)){

		numero = parseInt(prompt('Lo que ingreso no es un numero. Intentelo nuevamente.'));
	}

	if(numero >= 0){

		positivo = numero + positivo;

	}else{

		negativo = negativo * numero;
		flag = 1;

	}

	respuesta =	prompt('Quiere seguir ingresando numeros?');
}while(respuesta == 'si');

	if(flag == 0){

		negativo = 0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}