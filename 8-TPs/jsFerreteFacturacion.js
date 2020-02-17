/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var preResultado
    var iva

    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    resultado = precioUno + precioDos + precioTres;

    alert("La suma es de: " + resultado );
}
function Promedio () 
{
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    resultado = Math.floor((precioUno + precioDos + precioTres) / 3);

    alert("El promedio es: " + resultado );
}
function PrecioFinal () 
{
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    preResultado    = precioUno + precioDos + precioTres ;
    iva  =  (preResultado * 21) / 100 ;
    resultado = preResultado + iva ;

    alert("Su importe es:  " + resultado + " (IVA incluido)" );
}