const tomarDatos = () => {
    let num = Number($("#num").val());
    let retorno = porsitionega(num);
    $("#retorno").html(retorno);
}
$("#btnmostrar").click(tomarDatos);

let porsitionega = num => {
    if (num > 0) {
        return "Es positivo.";
    } else if (num == 0) {
        return "Es neutro.";
    } return "Es negativo.";
}
