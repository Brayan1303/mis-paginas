let usuarios = [];

const tomarDatos = () => {
    let user = $("#user").val();
    agregarUser(user);
}

const agregarUser = (user) => {
    let repetido = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].toLowerCase() === user.toLowerCase()) {
            repetido = true;
            break;
        }
    }

    if (user !== "" && !repetido) {
        usuarios.push(user);
        $("#user").val("");
    } else if (repetido) {
        alert("Ese alias ya existe.");
    }
}

const mostrarUsuarios = () => {
    $("#retorno").html("");

    for (i = 0; i < usuarios.length; i++) {
        $("#retorno").append("[" + usuarios[i] + "]<br>");
    }
}
$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrarUsuarios);
