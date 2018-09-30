    $(function () {
        $("#boton").on("click", function (e) {
            var jqxhr = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 50}
            });

            jqxhr
                .done(function (data) {
                    $("#boton").hide();
                    var listaUsuarios = data["results"];
                    var texto = "";
                    for (usuario of listaUsuarios) {
                        var nombre = usuario["name"]["first"];
                        var apellido = usuario["name"]["last"];
                        var email = usuario["email"];
                        var localidad = usuario["location"]["city"]
                        var estado = usuario["location"]["state"]
                        var cp = usuario["location"]["postcode"]
                        var calle = usuario["location"]["street"]
                        var imagen = usuario["picture"]["large"];
                        texto="<div class='fila'>";
                            texto+="<figure>";
                                texto += "<img src='" + imagen + "'>";
                            texto+="</figure>";
                            texto+="<div class='texto'>";
                                texto += "<p>"+nombre + " " + apellido + "</p>";
                                texto += "<p>"+email + "</p>";
                                texto += "<p>"+calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                            texto += "</div>";
                        texto+="</div>";
                        $("#contenido").append(texto);
                    }
                })
                .fail(function (jxhr, textStatus) {
                    console.log(textStatus);
                })

        $("img").on("click",function (e) {
            $(this).css({
                "display":"none"
            });
            var jqxhr2 = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 1}
            });
            jqxhr2
                .done(function (data) {
                    $("#boton").hide();
                    var listaUsuarios2 = data["results"];
                    var texto2 = "";
                    for (usuario of listaUsuarios) {
                        var nombre2 = usuario["name"]["first"];
                        var apellido2 = usuario["name"]["last"];
                        var email2 = usuario["email"];
                        var localidad2 = usuario["location"]["city"]
                        var estado2 = usuario["location"]["state"]
                        var cp2 = usuario["location"]["postcode"]
                        var calle2 = usuario["location"]["street"]
                        var imagen2 = usuario["picture"]["large"];
                        texto2="<div class='fila'>";
                        texto2+="<figure>";
                        texto2 += "<img src='" + imagen + "'>";
                        texto2+="</figure>";
                        texto2+="<div class='texto'>";
                        texto2 += "<p>"+nombre + " " + apellido + "</p>";
                        texto2 += "<p>"+email + "</p>";
                        texto2 += "<p>"+calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                        texto2 += "</div>";
                        texto2+="</div>";
                        $("#contenido2").append(texto2);
                    }
                })
                .fail(function (jxhr2, textStatus) {
                    console.log(textStatus);
                })
        })
        })
    })