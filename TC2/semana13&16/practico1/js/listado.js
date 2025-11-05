var formulario = document.getElementById('formulario')
// Evento sobre el botón de typo submit:
formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // evita que se ejecute lo que viene por defecto en el navegador.

  var datos = new FormData(formulario);
  $.ajax({
    url: 'js/listado.php',
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      $("#mensaje").empty(); // Vaciar el contenido antes de agregar nuevos datos

      // Construir una tabla dentro del js
      //No esta terminado
      response.forEach((unDato) => {
        $("#mensaje").append("Respuesta: " + unDato.cedula + " " + unDato.pnombre + " " + unDato.papellido + " " + unDato.direccion + " " + unDato.ciudad + "<br>");
      });
      /*response.forEach((unDato) => {
        $("#mensaje").append("Respuesta: " + unDato.cedula + " " + unDato.pnombre + " " + unDato.papellido + " " + unDato.direccion + " " + unDato.ciudad + "<br>");
      });*/
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  })

})