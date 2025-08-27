$("#btnmostrar").click(mostrarnum);

function mostrarnum() {
    let num1 = Number($("#num1").val());
    let num2 = Number($("#num2").val());
    let resultado = 0;

    let multiploA = num1;
    let multiploB = num2;

    while (multiploA !== multiploB) {
        if (multiploA < multiploB) {
            multiploA += num1;
        } else {
            multiploB += num2;
        }
    }

    resultado = multiploA;
    $("#retorno").html(`El minimo común múltiplo es: ${resultado}`);
}
