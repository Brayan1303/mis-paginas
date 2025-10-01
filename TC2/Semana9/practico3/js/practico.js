let palabras = [];

const tomarDatos = () => {
    let text = $("#text").val();
    agregarPalabra(text);
}

const agregarPalabra = (text) => {
    if ($("#text").val() !== "") {
        palabras.push(text);
        $("#text").val("");
    }
}

const mostrarPalabras = () => {
    $("#retorno").html("");

    for (i = 0; i < palabras.length; i++) {
        $("#retorno").append(palabras[i] + "<br>");
    }
}
$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrarPalabras);
