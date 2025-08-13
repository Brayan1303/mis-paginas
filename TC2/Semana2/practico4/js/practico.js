$("#bntaceptar").click(tomardatos);

function tomardatos() {

    let name = $("#name").val();
    let age = Number($("#age").val());

    if (age >= 18) {
        $("#retorno").html(`Bienvenido ${name}, usted es mayor de edad.`);

    } else if (age >= 0 && age < 18) {
        $("#retorno").html(`Bienvenido ${name}, usted es menor de edad.`);

    } else {
        $("#retorno").html(`Bienvenido ${name}¡SU EDAD ES IMPOSIBLE!`);
    }

}