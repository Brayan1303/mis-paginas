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


const mostrarMayora20 = () => {
    $("#retorno").html("");

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > 20) {
            $("#retorno").append("[" + numeros[i] + "]<br>");
        }
    }
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrarMayora20);
