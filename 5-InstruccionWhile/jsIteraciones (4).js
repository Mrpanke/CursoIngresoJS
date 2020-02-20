function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero < 0 || numero > 9) {

		numero = prompt("El numero es incorrectro. Porfavor intentelo nuevamente");
		
    }
    
    document.getElementById("Numero").value = "El numero es corecto: " +  numero;

}//FIN DE LA FUNCIÓN