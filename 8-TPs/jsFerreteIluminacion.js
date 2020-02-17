/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () {
var cantLamparas;
var precioLapm = 35;
var preciototal;
var marca;
var precioConIngre;
var ingresoBruto;
var descuento;
var precioConDescuento;

        cantLamparas = parseInt(document.getElementById("Cantidad").value);
        marca = document.getElementById("Marca").value





    if(cantLamparas >= 6 ){

            preciototal = cantLamparas * precioLapm;
            descuento = ( preciototal * 50) / 100;
            precioConDescuento = preciototal - descuento;

                if(precioConDescuento > 120){

                    ingresoBruto = (precioConDescuento * 10) /100
                    precioConIngre = precioConDescuento + ingresoBruto
                    document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";

                }else{

                    document.getElementById("precioDescuento").value = "El precio con descuento es de: " +  precioConDescuento + "$";
                }

    

    }else if(cantLamparas == 5 ){
         
            switch(marca){
                case "ArgentinaLuz":
                    preciototal = cantLamparas * precioLapm;
                    descuento = ((cantLamparas * precioLapm) * 40) / 100;
                    precioConDescuento = preciototal - descuento;

                    if(precioConDescuento > 120){

                    ingresoBruto = (precioConDescuento * 10) /100
                    precioConIngre = precioConDescuento + ingresoBruto
                    document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";

                    }else{

                        document.getElementById("precioDescuento").value = "El precio con descuento es de: " +  precioConDescuento + "$";
                    }
                break;
                default:

                    preciototal = cantLamparas * precioLapm;
                    descuento = ((cantLamparas * precioLapm) * 30) / 100;
                    precioConDescuento = preciototal - descuento;
    
                    if(precioConDescuento > 120){
    
                        ingresoBruto = (precioConDescuento * 10) /100
                        precioConIngre = precioConDescuento + ingresoBruto
                        document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";
                    }   

            }

    }else if(cantLamparas == 4){

            switch(marca){

                case "ArgentinaLuz":
                case "FelipeLamparas":

                    preciototal = cantLamparas * precioLapm;
                    descuento = ( preciototal * 25) / 100;
                    precioConDescuento = preciototal - descuento;
    
                        if(precioConDescuento > 120){
    
                            ingresoBruto = (precioConDescuento * 10) /100
                            precioConIngre = precioConDescuento + ingresoBruto
                            document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";
    
                        }else{
    
                            document.getElementById("precioDescuento").value = "El precio con descuento es de: " +  precioConDescuento + "$";
                        }
                break;
            
                default:
                    preciototal = cantLamparas * precioLapm;
                    descuento = ( preciototal * 20) / 100;
                    precioConDescuento = preciototal - descuento;
    
                        if(precioConDescuento > 120){
    
                            ingresoBruto = (precioConDescuento * 10) /100
                            precioConIngre = precioConDescuento + ingresoBruto
                            document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";
    
                        }else{
    
                            document.getElementById("precioDescuento").value = "El precio con descuento es de: " +  precioConDescuento + "$";
                        }
            }

    }else if(cantLamparas == 3 ){

            switch(marca){

                case "ArgentinaLuz":
                    preciototal = cantLamparas * precioLapm;
                    descuento = ( preciototal * 15) / 100;
                    precioConDescuento = preciototal - descuento;
    
                        if(precioConDescuento > 120){
    
                            ingresoBruto = (precioConDescuento * 10) /100
                            precioConIngre = precioConDescuento + ingresoBruto
                            document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";
    
                        }else{
    
                            document.getElementById("precioDescuento").value = "El precio con descuento es de: " +  precioConDescuento + "$";
                        }

                break;

                case "FelipeLamparas":
                    preciototal = cantLamparas * precioLapm;
                    descuento = ( preciototal *10) / 100;
                    precioConDescuento = preciototal - descuento;
    
                        if(precioConDescuento > 120){
    
                            ingresoBruto = (precioConDescuento * 10) /100
                            precioConIngre = precioConDescuento + ingresoBruto
                            document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";
    
                        }else{
    
                            document.getElementById("precioDescuento").value = "El precio con descuento es de: " +  precioConDescuento + "$";
                        }

                break;

                default:
                    preciototal = cantLamparas * precioLapm;
                    descuento = ( preciototal *5) / 100;
                    precioConDescuento = preciototal - descuento;
    
                        if(precioConDescuento > 120){
    
                            ingresoBruto = (precioConDescuento * 10) /100
                            precioConIngre = precioConDescuento + ingresoBruto
                            document.getElementById("precioDescuento").value = "El precio total es de: " +  precioConIngre + "$" + " (IIBB Usted pago: " + ingresoBruto + "$)";
    
                        }else{
    
                            document.getElementById("precioDescuento").value = "El precio con descuento es de: " +  precioConDescuento + "$";
                        }
                }
        }else{

            preciototal = cantLamparas * precioLapm;
            document.getElementById("precioDescuento").value = "El precio de su compra es de: " +  preciototal + "$ (No corresponde ningun descuento)";
        }











}
     












