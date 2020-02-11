function mostrar()
{
//tomo la edad  
var edad;
var civil;
	
    edad = parseInt(document.getElementById("edad").value);
    civil = document.getElementById("estadoCivil").value;

    if(edad < 18 && civil != soltero)
    {

        alert("Es muy pequeño para NO ser soltero");
    }

}//Preguntar por que no funciona 