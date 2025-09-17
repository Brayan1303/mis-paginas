
const tomarDatos = () => {
    let num1 = Number($("#num1").val());
    let num2 = Number($("#num2").val());
    $("#retorno").html(suma(num1,num2));
}

const suma = (a, b) => a + b;

$("#btnmostrar").click(tomarDatos);
