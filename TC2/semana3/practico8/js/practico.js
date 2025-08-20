$("#bntaceptar").click(tomardatos);

function tomardatos() {

    const name = $("#name").val();
    var ingreso = Number($("#ingreso").val());
    let precio = Number($("#precio").val());

    if (ingreso >= 20000) {
        var prmpago = precio * 0.3;
        precio = precio - prmpago;
        $("#retorno").html(`Bienvenido ${name}, su primer pago sera de ${(prmpago).toFixed(2)}$, luego debera pagar ${(precio / 12).toFixed(2)}$ en cuotas por 1 años.`)
    } else if (ingreso < 20000) {
        var prmpago = precio * 0.15;
        precio = precio - prmpago;
        $("#retorno").html(`Bienvenido ${name}, su primer pago sera de ${(prmpago).toFixed(2)}$, luego debera pagar ${(precio / 84).toFixed(2)}$ en cuotas por 7 años.`)
    }

}