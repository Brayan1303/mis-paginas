$("#btnmostrar").click(mostrarnum);

function mostrarnum() {
    let veces = -100;

    while (veces <= 10) {
        $("#retorno").append("<br>" + veces);
        veces = veces + 1;

    }
}