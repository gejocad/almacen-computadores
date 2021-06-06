//Función prevent Default para cancelar los eventos por defecto
function functionSubmit(e){
   e.preventDefault();
}

//Declaración de variables
let cant, total;
const unidad = 820000;



function getFinal(){
    cant = document.getElementById('cantidad').value;
    total = cant * unidad;
    localStorage.setItem("total", total);
    window.location.href = "compra.html";
    
    
}

