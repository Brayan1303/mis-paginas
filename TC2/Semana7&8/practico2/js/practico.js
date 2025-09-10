
const tomarDatos = () => {
    let num = Number($("#num").val());
    $("#retorno").html(`El triple de ${num} es ${triple(num)}`);
}

const triple = num => num * 3;

$("#btnmostrar").click(tomarDatos);
