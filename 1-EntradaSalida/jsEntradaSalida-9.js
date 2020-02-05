/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var preresultado;

    sueldo = parseInt(document.getElementById("sueldo").value);

    preresultado = (sueldo * 10) / 100;
    resultado = sueldo + preresultado;

    document.getElementById("resultado").value = resultado;
}
