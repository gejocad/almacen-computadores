function calcularTotal() {

   let cantidad = localStorage.getItem("total");
   let descuento = 0, resultado = 0, aviso = "No hay descuento para esta compra";

   if (cantidad > 0){ 

    if ((cantidad >= 1640000) && (cantidad <= 3280000)) {(descuento = cantidad * 0.15) && (aviso = "Tiene un descuento del 15%");} 
    else if ((cantidad > 3280000) && (cantidad <= 6560000)) {(descuento = cantidad * 0.25) && (aviso = "Tiene un descuento del 25%");}
    else if ((cantidad >= 6560000) && (cantidad <= 9840000)) {(descuento = cantidad * 0.35) && (aviso = "Tiene un descuento del 35%");}
    else {descuento = 0;}
}else{
    alert ("ingrese una cantidad valida");
    window.location.href = "index.html";
}



    resultado = cantidad;

    let total = resultado - descuento;

    

    document.querySelector("#resultado").innerHTML = resultado;
    document.querySelector("#descuento").innerHTML = descuento;
    document.querySelector("#total").innerHTML = total;
    document.querySelector("#aviso").innerHTML = aviso;

    
}

calcularTotal();
