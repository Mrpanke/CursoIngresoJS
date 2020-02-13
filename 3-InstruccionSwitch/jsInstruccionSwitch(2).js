function mostrar()
{
var mes = document.getElementById('mes').value;

switch(mes) {
            case "Enero":
            case "Febrero":
            case "Marzo":
            case "Abril":
            case "Mayo":
            case "Junio":
                alert("Falta para el invierno");
                break;
            case "Julio":
            case "Agosto":
                alert("Hace frio");
                break;

            default:
                alert("Ya paso el invierno");
} 
//Empezando por lo meses que estan posterior al los meses de frio se ecribe menos.


}