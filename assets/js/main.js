$(document).ready(function () {

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