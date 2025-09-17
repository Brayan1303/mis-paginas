
const tomarDatos = () => {
    let marca = $("#marca").val();
    let precio = Number($("#precio").val());
    let retorno = mostrar(marca, precio);
    $("#retorno").html(retorno);
}

$("#btnmostrar").click(tomarDatos);

const pago = (marca, precio) => {
    let desc = descuento(marca);
    return precio - (precio * desc);
};

let descuento = (marca) => {
    switch (marca) {
        case "honda":
            return 0.05;
            break;
        case "yamaha":
            return 0.08;
            break;
        case "suzuki":
            return 0.10;
            break;
        case "otras":
            return 0.02;
            break;

        default:
            return "Error..";
            break;
    }
}

let mostrar = (marca, precio) => {
    return `Moto marca "${marca}" de $${precio}.
    <br>Se aplica descuento: ${descuento(marca)}.
    <br>Total a pagar: $${pago(marca,precio)}`;
}