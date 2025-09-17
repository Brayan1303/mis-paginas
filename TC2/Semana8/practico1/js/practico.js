
const tomarDatos = () => {
    let num1 = Number($("#num1").val());
    let num2 = Number($("#num2").val());
    let num3 = Number($("#num3").val());
    let retorno = mostrar(num1, num2, num3);
    $("#retorno").html(retorno);
}
$("#btnmostrar").click(tomarDatos);

let suma = (a, b, c) => (a + b + c);

let producto = (a, b, c) => (a * b * c);

let mostrar = (a, b, c) => {
    if (a < 0) {
        return producto(a, b, c);
    }
    return suma(a, b, c);
}


