$(document).ready(cargarimg);

    function cargarimg() {
        let hora = new Date().getHours();
        let imagenUrl;

        if (hora >= 6 && hora < 12) {
            imagenUrl = "https://picsum.photos/seed/manana/400/300";
        } else if (hora >= 12 && hora < 18) {
            imagenUrl = "https://picsum.photos/seed/tarde/400/300";
        } else {
            imagenUrl = "https://picsum.photos/seed/noche/400/300";
        }
        $("#imagen").attr("src", imagenUrl);
    };
