let ciudades = [];

const tomarDatos = () => {
    let ubic = $("#ubic").val();
    let pais = $("#pais").val();
    let pob = Number($("#pob").val());
    agregar(ubic, pais, pob)
    $("#ubic").val("");
    $("#pais").val("");
    $("#pob").val("");
}

function Ciudad(ubic, pais, pob) {
    this.Ubicacion = ubic;
    this.Pais = pais;
    this.Poblacion = pob;
}

function agregar(u, p, po) {
    let ciudad = new Ciudad(u, p, po);
    ciudades.push(ciudad);
    return "Ciudad Registrada.";
}

function mostrar() {
    $("#retorno").html("");
    for (i = 0; i < ciudades.length; i++) {
        $("#retorno").append(ciudades[i].Ubicacion + " " + ciudades[i].Pais + " " + ciudades[i].Poblacion + "<br>");
    }
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrar);