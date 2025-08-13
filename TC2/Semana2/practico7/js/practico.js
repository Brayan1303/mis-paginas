$("#bntaceptar").click(tomardatos);

function tomardatos() {

    let cod = $("#cod").val().toLowerCase();

    switch (cod) {
        case "a":
            $("#retorno").html("Canelones.")
            break;

        case "b":
            $("#retorno").html("Maldonado.")
            break;

        case "c":
            $("#retorno").html("Rocha.")
            break;

        case "d":
            $("#retorno").html("Treinta y Tres.")
            break;

        case "e":
            $("#retorno").html("Cerro Largo.")
            break;

        case "f":
            $("#retorno").html("Rivera.")
            break;

        case "g":
            $("#retorno").html("Artigas.")
            break;

        case "h":
            $("#retorno").html("Salto.")
            break;

        case "i":
            $("#retorno").html("Paysandú.")
            break;

        case "j":
            $("#retorno").html("Río Negro.")
            break;

        case "k":
            $("#retorno").html("Soriano.")
            break;

        case "l":
            $("#retorno").html("Colonia.")
            break;

        case "m":
            $("#retorno").html("San José.")
            break;

        case "n":
            $("#retorno").html("Flores.")
            break;

        case "o":
            $("#retorno").html("Florida.")
            break;

        case "p":
            $("#retorno").html("Lavalleja.")
            break;

        case "q":
            $("#retorno").html("Durazno.")
            break;

        case "r":
            $("#retorno").html("Tacuarembó.")
            break;

        case "s":
            $("#retorno").html("Montevideo.")
            break;


        default:
            $("#retorno").html("Codigo no existente.")
            break;
    }
}