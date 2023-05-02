function calcular() {
    const a = 2;
    const km = document.getElementById("km").value;
    const consumo = document.getElementById("consumo").value;
    const precio = document.getElementById("precio").value;
    const personas = document.getElementById("personas").value;

    var resultado = 0;

    if(personas>1){
        resultado = consumo*km/100*precio/personas;
        alert("A pagar "+resultado+" por persona");
    }else{
        resultado = consumo*km/100*precio;
        alert("Pagarias "+resultado);
    }
}