$("#bntaceptar").click(tomardatos);

function tomardatos(){
    let num1 = Number($("#num1").val());
    let num2 = Number($("#num2").val());

    let suma = num1 + num2;
    let multi = num1 * num2;

    $("#retornosuma").html(`La suma de los numeros es: ${suma}`);
    $("#retornomulti").html(`La multiplicación de los numeros es: ${multi}`);
}