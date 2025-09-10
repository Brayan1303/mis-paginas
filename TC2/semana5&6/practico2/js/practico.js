$("#btnmostrar").click(tomarDatos);

function tomarDatos() {
    let num1 = Number($("#num1").val());
    let num2 = Number($("#num2").val());
    $("#retorno").html(pares(num1, num2));
}

function pares(n1, n2) {
    let resultado = "";
    if (n1 <= n2) {
        for (let i = n1; i <= n2; i++) {
            if (i % 2 == 0) {
                resultado = resultado + " " + i + " ";
            }
        }
        return resultado;
    } else {
        for (let i = n2; i <= n1; i++) {
            if (i % 2 == 0) {
                resultado = resultado + " " + i + " ";
            }
        }
        return resultado;
    }
}

