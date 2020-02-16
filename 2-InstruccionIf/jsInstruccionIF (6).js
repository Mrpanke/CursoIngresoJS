function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad >= 18){

alert("Usted es mayor de edad");
     
}else if(edad >= 13 && edad <= 17){

    alert("Usted es un adolecente");
}else
{

    alert("Uste es un niño");
}


}//Se puede resolver de diferentes formas 


//Poniendo en orden las condiciones se puede reducir las condiciones y dejando por descarte la ultima
/*  if(edad < 13){

    alert("niño");
     
}else if (edad <= 17){

    alert("adolecente");
}else
{

    alert("adulto");
}*/