function mostrar()
{
var sexo;
var nota;
var acumuladordeNotas;
var flag = 0;
var notaMenor;


for(var i = 0 ; i <  5 ; i++){

   nota = parseInt(prompt("Dame la nota"));

        while(nota <= 0 || nota >= 10 || isNaN(nota)){
            nota = parseInt(prompt("La nota es incorrecta. Dame la nota correcta"));
        }
        sexo = prompt("Dame el sexo (f o m): ");
        while(sexo != "f" && sexo != "m"){  
            sexo = prompt("El sexo es incorrecto. Ingrese (f o m)");
        }
        //Para sacar el promedio
        acumuladordeNotas = acumuladordeNotas + nota;
        //Para definir la nota menor se entra primero con el flag y luego dependiendo la nota se sigue modificando la variable "notaMenor"
        if(nota < notaMenor || flag == 0){

            notaMenor = nota;
            sexoMenor = sexo;
            flag = 1;

        }



}

}