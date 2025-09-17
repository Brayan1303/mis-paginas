
const tomarDatos = () => {
    let cant = Number($("#cant").val());
    let retorno = mostrar(cant);
    $("#retorno").html(retorno);
}

$("#btnmostrar").click(tomarDatos);

let comoPago = num => {
    if (num >= 3){
        return "TRAJETA";
    }return "EFECTIVO";
}

let mostrar = (cant) => {
        return `DEBE PAGAR CON ${comoPago(cant)}`;
}