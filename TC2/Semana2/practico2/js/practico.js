$("#bntaceptar").click(mayoromenor);

function mayoromenor() {
    let num = Number($("#num").val());

    if (num > 10) {
        $("#retorno").html(`el número ${num} es mayor a 10`);

    } else if (num == 10){
        $("#retorno").html(`el número es ${num}`);
    } else {
        $("#retorno").html(`el número ${num} es menor a 10`);
    }

}