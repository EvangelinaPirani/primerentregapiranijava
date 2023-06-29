let permanecer = true;
let opciones= confirm ("Bienvenidos a  MotoStore, desea continuar en la tienda?");
let funciones;

while (permanecer == true)
{
    funciones = prompt("NUESTRO STOCK \n Ingrese una opcion para continuar \n 1-Buzos \n 2-Accesorios");
    if ( isNaN(funciones))
    {
        alert("Porfavor, ingrese una opcion correcta");
    }
    else
    {
        permanecer = false;
        
    }


}

if (funciones === "1"){

    alert("LISTA DE BUZOS EN STOCK  \n 1-Buzo honda \n 2-Buzo yamaha");

}


if (funciones === "2"){

    alert("LISTA DE ACCESORIOS EN STOCK  \n 1-GORRO HONDA \n 2-GORRO FOX");
}


