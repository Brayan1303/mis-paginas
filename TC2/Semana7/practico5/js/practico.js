
const tomarDatos = () => {
    let num = Number($("#num").val());
    let retorno = paroImpar(num);
    $("#retorno").html(retorno);
}
$("#btnmostrar").click(tomarDatos);

let paroImpar = num => {
    if (num % 2 == 0) {
        return "Es par.";
    } return "Es impar.";
}

