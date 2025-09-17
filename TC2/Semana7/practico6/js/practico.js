
const tomarDatos = () => {
    let num = Number($("#num").val());
    let retorno = paroImpar(num);
    $("#retorno").html(retorno);
}
$("#btnmostrar").click(tomarDatos);

let paroImpar = num => { 
    if (num % 2 == 0) {
        return "Es par.";
    } else if (num > 50) {
        return "Es impar y mayor a 50";
    } return "Es impar."
}

