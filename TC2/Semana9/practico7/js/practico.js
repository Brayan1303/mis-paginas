let array = [];

const tomarDatos = () => {
    let val = $("#val").val();
    agregarValor(val);
}

const agregarValor = (val) => {
    if (val !== "") {
        array.push(val);
        $("#val").val("");
    }
}

const eliminarRepetido = (arr) => {
    let resultado = [];

    for (i = 0; i < arr.length; i++) {
        let repetido = false;

        for (j = 0; j < resultado.length; j++) {
            if (arr[i] === resultado[j]) {
                repetido = true;
                break;
            }
        }

        if (!repetido) {
            resultado.push(arr[i]);
        }
    }

    return resultado;
}

const mostrarArray = () => {
    $("#retorno").html("");

    let arraySinRepetidos = eliminarRepetido(array);

    for (let i = 0; i < arraySinRepetidos.length; i++) {
        $("#retorno").append("[" + arraySinRepetidos[i] + "]<br>");
    }
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrarArray);
