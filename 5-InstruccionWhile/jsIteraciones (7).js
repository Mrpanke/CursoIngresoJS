function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
	do{
		numero = parseInt(prompt('Ingrese los numeros'));
		acumulador = numero + acumulador;
		contador++;
		respuesta = prompt('Quiere continuar ingresando numero ?(Si para continuar, No para terminar y mostrar el resultado.)');
	}while( respuesta == 'si')

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN