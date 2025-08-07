$("#bntaceptar").click(tomardatos);

function tomardatos(){
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();

    $("#retorno").html(`Bienvenido ${nombre} ${apellido}.`);
}

