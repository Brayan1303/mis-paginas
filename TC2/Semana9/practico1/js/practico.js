const tomarDatos = () => {
    let a = $("#a").val();
    let b = $("#b").val();
    let c = $("#c").val();
    let array = [a, b, c];
    let retorno  = recorrer(array);
    $("#retorno").html(retorno);
}

$("#btnmostrar").click(tomarDatos);

let recorrer = a => {
    let resultado = "";
    for (let i = 0; i < a.length; i++) {
        resultado += a[i].length;
    }
    return resultado;
}
