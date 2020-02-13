function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch( mes ){

    case "Enero":
            alert("Que comienzes bien el año");

            break;

    case "Marzo":
            alert("A clases!!!");
            break;

    case "Julio": 
            alert("Se vienen las vacaciones");
            break;

    case "Diciembre":
            alert("Felices Fiestas!!!!.");
            break;                        
    default:
        alert("A ese mes no lo tuve en cuenta");
}



}//FIN DE LA FUNCIÓN