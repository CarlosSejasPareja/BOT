function mostrarSaludo() {
    var nombre = document.getElementById("nombre").value;
    var genero = document.getElementById("genero").value;
    var saludo = "";

    if (genero === "masculino") {
        saludo = "Hola, Sr. " + nombre + ". ¡Bienvenido!";
    } else if (genero === "femenino") {
        saludo = "Hola, Sra. " + nombre + ". ¡Bienvenida!";
    } else {
        saludo = "Hola, " + nombre + ". ¡Bienvenidx!";
    }
    document.getElementById("saludo").textContent = saludo;
}