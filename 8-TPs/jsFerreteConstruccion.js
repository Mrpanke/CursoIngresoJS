/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var resultado;
var radio;
var area;
var cemento = 2;
var cal = 3;
var cantCal;
var cantCemento;



largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
radio = parseInt(document.getElementById("Radio").value);

resultado = (largo * 2 ) + (ancho * 2);

alert("Se nesecitan " + (resultado * 3) + "m" + " de alambre para esas dimensiones. ");

}
function Circulo () 
{

    
    resultado = 2 * 3.14 * radio; 

    alert("Se nesecitan " + (resultado * 3) + "m" + " de alambre. ");



}
function Materiales () 
{


    area = largo * ancho;

    cantCemento = area * cemento;

    cantCal = area * cal;

    alert("Se necesitan:" + cantCemento + " bolsas de cemento y " + cantCal + " bolsas de cal.");

} //Preguntar por que no funciona el de materiales