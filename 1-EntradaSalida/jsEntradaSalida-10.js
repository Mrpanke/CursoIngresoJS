/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var preimporte;
    var importe;
    var resultado;

    preimporte = parseInt(document.getElementById("importe").value);

    importe = (preimporte * 25) / 100;
    resultado = preimporte - importe;

    document.getElementById("resultado").value = resultado;

}
