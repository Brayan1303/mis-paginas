function Persona(nomb, apell) {
    this.Nombre = nomb;
    this.Apellido = apell;
    this.mostrar = function () {
        return this.Nombre + " " + this.Apellido;
    };
}

function agregar(n, a) {
    let persona = new Persona(n, a);
    personas.push(persona);
    return "Registro ok.";
}

function mostrar() {
    for (i = 0; i < personas.length; i++) {
        $("#retorno").append(personas[i].mostrar());
    }
}

function Auto(matri, cantP, tipo) {
    this.Matricula = matri;
    this.CantPuertas = cantP;
    this.Tipo = tipo;
    this.mostrar = function () {
        return this.Matricula + " " + this.CantPuertas + " " + this.Tipo;
    };
}

function Casa(tipo, direccion, propietario) {
    this.Tipo = tipo;
    this.Direccion = direccion;
    this.Propietario = propietario;
    this.mostrar = function () {
        return this.Tipo + " " + this.Direccion + " " + this.Propietario;
    };
}