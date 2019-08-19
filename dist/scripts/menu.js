var $navbar = $('.navbar');
//     $menuTicker = $('.btn-menu');

// $menuTicker.click(function(e) {
//     e.preventDefault();
//     $navbar.toggleClass('active');
//     });
$('body').click(function(e) {
    $navbar.removeClass('active');
});

$navbar.click(function(e) {
    e.stopPropagation();
});
//closed menu on ESC
$navbar.keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $navbar.removeClass('active');
    };
});