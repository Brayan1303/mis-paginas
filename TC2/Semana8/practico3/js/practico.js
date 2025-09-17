
const tomarDatos = () => {
    let cant = Number($("#cant").val());
    let nombre = $("#nombre").val();
    let retorno = mostrar(cant,nombre);
    $("#retorno").html(retorno);
}

$("#btnmostrar").click(tomarDatos);

const pago = (cant) => {
    let total = cant * 250;
    let desc = descuento(cant);
    return total - (total * desc);
};

let descuento = (cant) => {
    if (cant <= 12) {
       return 0.10;
    } return 0.25;
}

let mostrar = (cant, nombre) => {
    return `${nombre} usted debe pagar $${pago(cant)}`;
}