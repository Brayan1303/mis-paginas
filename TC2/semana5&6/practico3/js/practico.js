$("#btnmostrar").click(tomarDatos);

function tomarDatos() {
    let edad = Number($("#edad").val());
    let tope = Number($("#tope").val());
    if ((esMayor(edad, tope)) == true) {
        $("#retorno").html("Es mayor.");
    } else {
        $("#retorno").html("No es mayor.");
    }


}

function esMayor(n1, n2) {
    if (n1 >= n2) {
        return true;
    } else {
        return false;
    }
}

