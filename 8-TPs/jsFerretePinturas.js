/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var cel;
    var far;



    far = parseInt(document.getElementById("Temperatura").value);

    cel = (far - 32) * (5/9);
    
    alert(far + "° Fahrenheit son:  " + cel + "° Centígrados.")
}

function CentigradosFahrenheit () 
{
    cel = parseInt(document.getElementById("Temperatura").value);

    far = (cel * (9/5)) + 32;
    
    alert(cel + "° Centigrados son:  " + far + "° Fahrenheit.")
}
