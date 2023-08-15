function mostrarSaludo() {
    var nombre = document.getElementById("nombre").value;
    var saludo = "Hola, " + nombre ;
    document.getElementById("saludo").textContent = saludo;
}