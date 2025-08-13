$("#bntaceptar").click(tomardatos);

function tomardatos() {

    const name = $("#name").val();
    var millas = Number($("#millas").val());
    let plus = $("#plus").val();

    if (plus == "si") {
        var millas = millas * 2;
    }

    if (millas >= 60000) {
        $("#retorno").html(`Bienvenido ${name}, usted cuenta con ${millas} millas, como viaje mas lejano puede ir a Europa.`)
    } else if (millas >= 30000 && millas < 60000) {
        $("#retorno").html(`Bienvenido ${name}, usted cuenta con ${millas} millas, como viaje mas lejano puede ir a America del Norte.`)
    } else if (millas >= 15000 && millas < 30000) {
        $("#retorno").html(`Bienvenido ${name}, usted cuenta con ${millas} millas, como viaje mas lejano puede ir a America del sur.`)
    }
}