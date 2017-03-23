
// Change picture based on hover
$(function() {
    $("img")
        .hover(function() {
            var src = $(this).attr("src").match(/[^\.]+/) + "hover.png";
            $(this).css('min-height', $(this).height());
            $(this).attr("src", src);
        }, function() {
          var src = $(this).attr("src").replace("hover.png", ".png");
          $(this).attr("src", src);
        });
});
