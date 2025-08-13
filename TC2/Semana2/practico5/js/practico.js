$("#bntaceptar").click(tomardatos);

function tomardatos() {

    let day = $("#day").val().toLowerCase();

    if (day == "lunes") {
        $("#retorno").html(`${day} es igual a lunes.`);

    } else {
        $("#retorno").html(`${day} no es igual a lunes.`);
    }

}