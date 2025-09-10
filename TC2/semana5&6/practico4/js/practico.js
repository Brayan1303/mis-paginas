$("#btnmostrar").click(tomarDatos);

function tomarDatos() {
    let base = Number($("#base").val());
    let altura = Number($("#altura").val());
    $("#retorno").html(`Area: ${calcularAreaTriangulo(base, altura)}`);
}

function calcularAreaTriangulo(n1, n2) {
    return (n1 * n2) / 2;
}

