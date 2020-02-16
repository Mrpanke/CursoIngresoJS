function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m") {
    

 
    sexo =  prompt("Es sexo es incorecto. Intente nuevamente. ");


}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN