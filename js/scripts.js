$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

// Note to Prof: this was harder to figure out than anything else we've done so far, mainly because I don't think the instructions were very clear. And the lessons didn't really cover how Jquery worked or how the code could be changed from the lesson examples to do this. I honestly just googled until I found a similar answer, and then plugged & chugged until it worked. I still have zero clue why this answer worked and my previous attempts didn't. (I found my answer here: https://www.studentstutorial.com/jquery/jquery-show_hide_bootstarp_modal.php)

$("#reserveButton").on("click", function () {
    $('#reserveModal').modal('show');
});

$("#loginButton").on("click", function () {
    $('#loginModal').modal('show');
});