$("#bntaceptar").click(paroimpar);

function paroimpar() {
    let num = Number($("#num").val());

    if (num % 2 == 0) {
        $("#retorno").html(`el número ${num} es par`);

    } else {
        $("#retorno").html(`el número ${num} es impar`);
    }

}