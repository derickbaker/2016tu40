$(document).ready(function() {
    $('.learnmore').click(function(e) {
         e.preventDefault();
        $(window).scrollTo($('#intro') , 500, {offset:-51});
    });
});