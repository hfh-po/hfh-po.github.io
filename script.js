function atualizarRelogio() {
    var hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });
    document.getElementById('Relógio').innerHTML = hora;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

$(".desktop_icons").click(function () {
    if($(this).hasClass("selected")){
        $(this).removeClass("selected");
    } else {
        $(this).addClass("selected");
    }
})

$(".desktop_icons").draggable({
    contaiment: ".area_de_trabalho",
    stop: function(){
        $(this).removeClass("selected")
        $(this).addClass("selected")
    }
});

$(document).ready(function() {
    $("#iniciar").click(function() {
        $("#menu_iniciar").toggle();
    });
});
