function mostrar()
{
//tomo la edad  

    var edad;
    var estadoCivil;

    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;

    if(edad >= 18 && estadoCivil == "soltero"){

        alert("Es soltero y no es menor");
    }

}




//Preguntar por que no funciona