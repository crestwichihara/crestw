$(function () {
    $("video").on("ended", function () {
        $(this).hide();
        $("#video" + Math.ceil(Math.random() * 8)).show().get(0).play();
    });
});
