
const tomarDatos = () => {
    let materia = $("#materia").val();
    let escrito = Number($("#escrito").val());
    let oral = Number($("#oral").val());
    let practico = Number($("#practico").val());
    $("#retorno").html(`De la materia ${materia} su promedio es: ${promedio(escrito, oral, practico)}`);
}

$("#btnmostrar").click(tomarDatos);

let promedio = (num1,num2,num3) => ((num1 + num2 + num3) / 3);
