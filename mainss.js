$(document).ready(function () {
    let fnum = 0, snum = 0, rnum=0, tnum=0;
    $('input[name="fnum"]').on("click", function () {
        fnum = parseInt($('input[name="fnum"]:checked').val());

    });

    $('input[name="snum"]').on("click", function () {
        snum = parseInt($('input[name="snum"]:checked').val());
    });

    $('input[name="tnum"]').on("click", function () {
        tnum = parseInt($('input[name="tnum"]:checked').val());
    });

    $('input[name="rnum"]').on("click", function () {
        rnum = parseInt($('input[name="rnum"]:checked').val());
    });

    $("button").on('click', function () {
        let sum = fnum + snum + rnum + tnum + 1000;
        $(".res").html("a végösszeg körülbelül: " + sum + "Ft/fő");
        $(".resq").html("Első nap: " + fnum + "Ft/fő");
        $(".resw").html("Második nap: " + snum + "Ft/fő");
        $(".rese").html("Harmadik nap: " + tnum + "Ft/fő");
        $(".resr").html("Szállás: " + rnum + "Ft/fő");
    });
});