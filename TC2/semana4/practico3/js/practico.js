$("#btnmostrar").click(mostrarnum);

function mostrarnum() {
    for (let veces = 43; veces <= 101; veces++) {
        if (veces % 2 != 0) {
            $("#retorno").append(`${veces}<br>`);

        }
    }

}