// Array global
let numeros = [];

const tomarDatos = () => {
    let num = Number($("#num").val());
    agregarNumero(num);
}

const agregarNumero = (num) => {
    if ($("#num").val() !== "") {
        numeros.push(num);
        $("#num").val("");
    }
}

const obtenerMayor = (a) => {
    let mayor = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > mayor) {
            mayor = a[i];
        }
    }
    return mayor;
}

const mostrarMayor = () => {
    if (numeros.length > 0) {
        let mayor = obtenerMayor(numeros);
        $("#retorno").html("El mayor número ingresado es: " + mayor);
    } else {
        $("#retorno").html("No se ingresaron números aún.");
    }
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrarMayor);
