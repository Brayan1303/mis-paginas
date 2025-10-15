let camiones = [];

const tomarDatos = () => {
    let m = $("#m").val();
    let t = $("#t").val();
    let c = Number($("#c").val());
    $("#btnmostrarmat").click(mostrarmat(bm));
    agregar(m, t, c)
    $("#m").val("");
    $("#t").val("");
    $("#c").val("");
}

function Camion(m, t, c) {
    this.Matricula = m;
    this.Tipo = t;
    this.Ejes = c;
}

function agregar(m, t, c) {
    let camion = new Camion(m, t, c);
    camiones.push(camion);
    return "Camión Registrado.";
}

function mostrar() {
    $("#retorno").html("");
    for (i = 0; i < camiones.length; i++) {
        $("#retorno").append(camiones[i].Matricula + " " + camiones[i].Tipo + " " + camiones[i].Ejes + "<br>");
    }
}

function mostrarmat() {
    let bm = $("#bm").val();
    $("#retornomat").html("");
    for (i = 0; i < camiones.length; i++) {
        if (bm == camiones[i].Matricula) {
            $("#retornomat").html("El Camión está registrado.");
        } else {
            $("#retornomat").html("El Camión no está registrado.");
        }
    }
    $("#bm").val("");
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrar);
$("#btnmostrarmat").click(mostrarmat);