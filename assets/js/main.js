$(document).ready(function () {

    /*
            // on scroll Navbar Fixed and back to top show
            $(window).on('scroll', function() {
                if($(window).width() > 600){
                    if ($(window).scrollTop() > 600) {
                        $('#back-to-top').addClass('reveal');
                    } else {
                        $('#back-to-top').removeClass('reveal');
                    }
                }
            });
    */

    // Start Back to Top
    $('#back-to-top').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    // Pop-Up Form
    $('.exit-btn-popup-form').click(function () {
        $('#form-pop-up-wrapper').hide();
    });

    $('.pop-up-form-activator').click(function () {
        $('#form-pop-up-wrapper').show();
    });


});