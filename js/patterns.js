$(".pattern").each(function() {
    var elem = $(this);
    var pattern = elem.attr("data-pattern");

    $.get("https://exomagica.github.io/patterns/" + pattern + ".ptrn", function(data) {
        elem.html(data);
    });
});