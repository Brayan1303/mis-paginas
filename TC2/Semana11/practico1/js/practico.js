let personas = [];

const tomarDatos = () => {
    let nomb = $("#nomb").val();
    let apell = $("#apell").val();
    agregar(nomb, apell);
    $("#nomb").val("");
    $("#apell").val("");
}

function Persona(nomb, apell) {
    this.Nombre = nomb;
    this.Apellido = apell;
    this.mostrar = function () {
        return this.Nombre + " " + this.Apellido;
    };
}

function agregar(n, a) {
    let persona = new Persona(n, a);
    personas.push(persona);
}

function mostrar() {
    $("#retorno").html(" ");
    for (i = 0; i < personas.length; i++) {
        $("#retorno").append(personas[i].mostrar() +", ");
    }
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrar);