// Starr Call Plugin
$(".starrr").each(function () {
    $(this).starrr({
        rating: $(this).attr('ratio'),
        readOnly: true
    })
});