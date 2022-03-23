jQuery(function ($) 
{
    'use strict';
    (function () 
    {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    (function () 
    {
        $("#review").owlCarousel({
            autoPlay: 10000,
            items: 2,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
    }());


}); // JQuery end