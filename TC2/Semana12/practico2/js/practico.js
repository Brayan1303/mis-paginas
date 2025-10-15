let temperaturas = [];

const tomarDatos = () => {
    let dia = $("#dia").val();
    let tempmin = $("#tempmin").val();
    let tempmax = $("#tempmax").val();
    let tempact = $("#tempact").val();
    agregar(dia, tempmin, tempmax, tempact);
    $("#dia").val("");
    $("#tempmin").val("");
    $("#tempmax").val("");
    $("#tempact").val("");
}

function Temperaruta(dia, tempmin, tempmax, tempact) {
    this.Dia = dia;
    this.TemperarutaMinima = tempmin;
    this.TemperarutaMaxima = tempmax;
    this.TemperarutaActual = tempact;
    this.mostrar = function () {
        return "Día:" + this.Dia + "|Temperatura Mínima:" + this.TemperarutaMinima + "°|Temperatura Máxima:" + this.TemperarutaMaxima + "°|Temperatura Actual:" + this.TemperarutaActual + "°";
    };
}

function agregar(dia, tempmin, tempmax, tempact) {
    let temperatura = new Temperaruta(dia, tempmin, tempmax, tempact);
    temperaturas.push(temperatura);
}

function mostrar() {
    $("#retorno").html(" ");
    for (i = 0; i < temperaturas.length; i++) {
        $("#retorno").append("[" + temperaturas[i].mostrar() + "]<br>");
    }
}

function mostrarMaximas() {

    if (temperaturas.length === 0) {
        $("#retornoMax").html("No hay datos registrados.");
        return;
    }

    let maxTemp = Number(temperaturas[0].TemperarutaActual);

    for (i = 1; i < temperaturas.length; i++) {
        let tempActual = Number(temperaturas[i].TemperarutaActual);
        if (tempActual > maxTemp) {
            maxTemp = tempActual;
        }
    }

    $("#retornoMax").html(""); // limpiar
    for (let i = 0; i < temperaturas.length; i++) {
        if (Number(temperaturas[i].TemperarutaActual) === maxTemp) {
            $("#retornoMax").append(
                `El día ${temperaturas[i].Dia} se registró la máxima de ${maxTemp}°.<br>`
            );
        }
    }
}


$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrar);
$("#btnmostrarMax").click(mostrarMaximas);