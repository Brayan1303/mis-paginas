let personas = [];

const tomarDatos = () => {
    let nomb = $("#nomb").val();
    let apell = $("#apell").val();
    let edad = Number($("#edad").val());
    agregar(nomb, apell, edad);
    $("#nomb").val("");
    $("#apell").val("");
    $("#edad").val("");
}

function Persona(nomb, apell, edad) {
    this.Nombre = nomb;
    this.Apellido = apell;
    this.Edad = edad;
    this.mostrar = function () {
        return this.Nombre + " " + this.Apellido + ", " + this.Edad + " Años";
    };
}

function agregar(n, a, e) {
    let persona = new Persona(n, a, e);
    personas.push(persona);
}

function mostrar() {
    $("#retorno").html("");
    for (i = 0; i < personas.length; i++) {
        $("#retorno").append(personas[i].mostrar() + "<br>");
    }
}

function mostrarMayores() {
    $("#retornoMayores").html("");
    for (i = 0; i < personas.length; i++) {
        if (personas[i].Edad >= 18) {
            $("#retornoMayores").append(personas[i].mostrar() + "<br>");
        }
    }
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrar);
$("#btnmostrarMax").click(mostrarMayores);