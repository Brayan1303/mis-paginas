$("#bntaceptar").click(mayoromenor);

function mayoromenor() {
    let num = Number($("#num").val());

    if (num > 0) {
        $("#retorno").html(`el número ${num} es positivo`);

    } else if (num == 0){
        $("#retorno").html(`el número ${num} es neutro`);
    } else {
        $("#retorno").html(`el número ${num} es negativo`);
    }

}