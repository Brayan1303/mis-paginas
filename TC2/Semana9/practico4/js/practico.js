let numeros = [];

const tomarDatos = () => {
    let num = Number($("#num").val());
    agregarNumero(num);
}

const agregarNumero = (num) => {
    if ($("#num").val() !== "") {
        numeros.push(num);
        $("#num").val("");
    }
}

const obtenerPromedio = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    return promedio;
}

const mostrar = () => {
    if (numeros.length > 0) {
        let retorno = obtenerPromedio(numeros);
        $("#retorno").html("El promedio es: " + retorno);
    } else {
        $("#retorno").html("No se ingresaron números aún.");
    }
}

$("#btnagregar").click(tomarDatos);
$("#btnmostrar").click(mostrar);